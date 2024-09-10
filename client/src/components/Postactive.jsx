import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = ({ loggedInUserId }) => {
  const [referrals, setReferrals] = useState([]);
  const [newReferral, setNewReferral] = useState({
    referredUser: "",
    amountEarned: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReferral({ ...newReferral, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is authenticated
    if (!loggedInUserId) {
      toast.error("You must be logged in to add a referral!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8076/api/postactiveUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newReferral,
          referrer: loggedInUserId, // Automatically set referrer
          referrerEarning: 0, // Default to 0
        }),
      });

      const data = await response.json();
      if (data.success) {
        setReferrals([...referrals, data.data]); // Update the referrals list
        setNewReferral({
          referredUser: "",
          amountEarned: 0,
        }); // Clear the form
        toast.success("Referral added successfully!"); // Show success toast
      } else {
        console.error("Failed to add referral:", data.message);
        toast.error(`Failed to add referral: ${data.message}`);
      }
    } catch (error) {
      console.error("Error posting referral:", error);
      toast.error("An error occurred while posting the referral.");
    }
  };

  return (
    <div className="home-page">
      <ToastContainer /> {/* Toast notification container */}
      {/* Form for adding a new referral */}
      <div className="row add-referral">
        <h2>Add New Referral</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="referredUser"
            value={newReferral.referredUser}
            onChange={handleInputChange}
            placeholder="Referred User ID"
            required
          />
          <input
            type="number"
            name="amountEarned"
            value={newReferral.amountEarned}
            onChange={handleInputChange}
            placeholder="Amount Earned"
            required
          />
          <button type="submit">Add Referral</button>
        </form>
      </div>
      {/* Existing Referrals */}
      <div className="row referral-list">
        <h2>Existing Referrals</h2>
        <ul>
          {referrals.map((referral) => (
            <li key={referral._id}>
              Referrer: {referral.referrer}, Referred User:{" "}
              {referral.referredUser}, Amount Earned: {referral.amountEarned},
              Referrer Earning: {referral.referrerEarning}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
