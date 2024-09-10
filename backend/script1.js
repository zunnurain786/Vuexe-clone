// backend/script1.js
const { ethers } = require("ethers");
const axios = require("axios");

// Replace with your provider URL (BSC RPC endpoint)
const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org/"
);
const contractAddress = "0xA9dce24A3ef787F9932Bf464980f20b8ff4c79ab";
const contractABI = [
  /* contract ABI here */
];
const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function fetchLevel1UsersRecursively(userAddress, levelUsersSet) {
  try {
    const level1Users = await contract.getLevelReferees(userAddress, 1);
    for (const user of level1Users) {
      if (!levelUsersSet.has(user)) {
        levelUsersSet.add(user);
        await fetchLevel1UsersRecursively(user, levelUsersSet);
      }
    }
  } catch (error) {
    console.error(`Error fetching level 1 users for ${userAddress}:`, error);
  }
}

async function sendDataToBackend(
  address,
  totalBuys,
  directBuys,
  joinedAt,
  level1Users
) {
  try {
    const response = await axios.post(
      "http://localhost:8076/api/update-founders",
      {
        address,
        totalBuys,
        directBuys,
        joinedAt,
        level1Users,
      }
    );
    console.log("Data sent to backend successfully:", response.data);
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
}

async function fetchUserData(userAddress) {
  try {
    const userData = await contract.users(userAddress);
    const userPurchases = await contract.userpurchases(userAddress);
    const levelUsersSet = new Set();
    await fetchLevel1UsersRecursively(userAddress, levelUsersSet);

    return {
      userAddress,
      userData,
      userPurchases,
      level1Users: Array.from(levelUsersSet),
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

async function main() {
  let currentLevelUsers = new Set([
    "0x1d1024ecC799390aB8D714409999d9D31CE93B20",
  ]);
  const allUsersData = [];
  const processedUsers = new Set();

  while (currentLevelUsers.size > 0) {
    const nextLevelUsers = new Set();

    for (const userAddress of currentLevelUsers) {
      if (processedUsers.has(userAddress)) continue;

      const data = await fetchUserData(userAddress);
      if (data) {
        allUsersData.push(data);
        processedUsers.add(userAddress);

        const { userAddress, userData, userPurchases, level1Users } = data;
        const totalBuys = userPurchases.totalPurchased.toNumber();
        const directBuys = userPurchases.totalPurchased.toNumber();
        const joinedAt = new Date(userData.joiningTimestamp.toNumber() * 1000);

        sendDataToBackend(
          userAddress,
          totalBuys,
          directBuys,
          joinedAt,
          level1Users
        );

        for (const levelUser of data.level1Users) {
          if (!processedUsers.has(levelUser)) {
            nextLevelUsers.add(levelUser);
          }
        }
      }
    }

    currentLevelUsers = nextLevelUsers;
  }

  console.log("Finished processing user data.");
}

main();
