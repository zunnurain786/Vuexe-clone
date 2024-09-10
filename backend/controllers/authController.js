const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("../models/User");
const Founder = require("../models/founder");
const Referral = require("../models/activeUser");

dotenv.config();

// Generate JWT token
const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// User Registration
exports.registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Validate email format
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    if (!validateEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "employee", // Default role is employee if not provided
    });

    // Save user to the database
    await user.save();

    // Generate JWT token
    const token = generateToken(user._id, user.role);

    res.status(201).json({
      success: true,
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error("Registration error:", err.message);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

// User Login
exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateToken(user._id, user.role);

    res.json({
      success: true,
      message: "Login successful",
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).send("Server error");
  }
};

// Get Active Referral by ID
exports.getActiveUser = async (req, res) => {
  try {
    const activeReferral = await Referral.find({}).populate(
      "referrer referredUser"
    );
    if (!activeReferral) {
      return res
        .status(404)
        .json({ success: false, message: "Referral not found" });
    }
    res.status(200).json({ success: true, data: activeReferral });
  } catch (err) {
    console.error("Fetch active referral error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.postActiveUser = async (req, res) => {
  try {
    const { referredUser, amountEarned } = req.body;
    const referrer = req.user._id; // Assuming `req.user` contains the logged-in user's information

    // Check if referredUser is a valid User ID
    const referredUserCheck = await User.findById(referredUser);
    if (!referredUserCheck) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid referred user" });
    }

    // Create a new referral
    const newReferral = new Referral({
      referrer,
      referredUser,
      amountEarned,
      referrerEarning: 0, // Default to 0
    });

    await newReferral.save();

    // Update referrer's total earnings
    const referrerUser = await User.findById(referrer);
    referrerUser.referredTotalEarning += amountEarned;
    referrerUser.referrals.push(newReferral._id);

    await referrerUser.save();

    res.status(201).json({ success: true, data: newReferral });
  } catch (err) {
    console.error("Create referral error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//add new persons to the company

exports.post = async (req, res) => {
  try {
    const {
      address,
      totalBuys,
      directBuys,
      joinedAt,
      rank,
      rewardGiven,
      rewardAmount,
      rewardAt,
      manualChange,
      lastUpdated,
      level1Users,
      level1Buys,
    } = req.body;

    // Check for required fields (basic validation)
    if (!address || !totalBuys || !directBuys || !joinedAt || !rank) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Create a new Founder instance
    const newFounder = new Founder({
      address,
      totalBuys,
      directBuys,
      joinedAt: new Date(joinedAt),
      rank,
      rewardGiven,
      rewardAmount,
      rewardAt: rewardAt ? new Date(rewardAt) : null,
      manualChange,
      lastUpdated: new Date(lastUpdated),
      level1Users: level1Users.split(",").map((user) => user.trim()),
      level1Buys,
    });

    // Save the new founder to the database
    await newFounder.save();

    // Send success response
    res.status(201).json({
      message: "Founder added successfully",
      founder: newFounder,
    });
  } catch (error) {
    console.error("Error adding founder:", error);

    // Send error response with a meaningful message
    res.status(500).json({
      message: "An error occurred while adding the founder. Please try again.",
      error: error.message, // Include specific error message for debugging
    });
  }
};

//extract all data stored for employee
exports.getdata = async (req, res) => {
  try {
    const founders = await Founder.find({}); // Fetch all founders from the database
    res.status(200).json(founders); // Send the data as JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" }); // Handle errors
  }
};

//to extract data for single user

exports.getdatasingle = async (req, res) => {
  try {
    const founder = await Founder.findById(req.params.id); // Fetch founder by ID
    if (!founder) {
      return res.status(404).json({ message: "Founder not found" }); // Handle case where founder is not found
    }
    res.status(200).json(founder); // Send the data as JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" }); // Handle errors
  }
};

//for update particular data
exports.put = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Find the founder by ID and update with the provided data
    const updatedFounder = await Founder.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Validate data against schema
    });

    if (!updatedFounder) {
      return res.status(404).json({ message: "Founder not found" });
    }

    res.status(200).json(updatedFounder); // Send the updated data as JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" }); // Handle errors
  }
};

//for delete particular route

exports.deletedata = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the founder by ID and delete it
    const deletedFounder = await Founder.findByIdAndDelete(id);

    if (!deletedFounder) {
      return res.status(404).json({ message: "Founder not found" });
    }

    res.status(200).json({ message: "Founder deleted successfully" }); // Confirmation message
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" }); // Handle errors
  }
};
