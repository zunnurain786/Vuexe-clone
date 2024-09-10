import React, { useState } from "react";
import "./New.css"; // Create a separate CSS file for styling
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AddFounderForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    totalBuys: 0,
    directBuys: 0,
    joinedAt: "",
    rank: "",
    rewardGiven: false,
    rewardAmount: 0,
    rewardAt: "",
    manualChange: false,
    lastUpdated: "",
    level1Users: "",
    level1Buys: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear previous messages
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8076/api/founders/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Founder added successfully!");

        // Navigate to the previous page or the /founders route if no previous page
        navigate(location.state?.from || "/founders");

        setFormData({
          address: "",
          totalBuys: 0,
          directBuys: 0,
          joinedAt: "",
          rank: "",
          rewardGiven: false,
          rewardAmount: 0,
          rewardAt: "",
          manualChange: false,
          lastUpdated: "",
          level1Users: "",
          level1Buys: 0,
        });
      } else {
        setErrorMessage("Failed to add founder. Please try again.");
        toast.error("An error occurred while adding the founder.");
      }
    } catch (error) {
      setErrorMessage("Server error");
      toast.error("An error occurred while adding the founder.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-founder-form">
      <h2>Add New Founder</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Buys:</label>
          <input
            type="number"
            name="totalBuys"
            value={formData.totalBuys}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Direct Buys:</label>
          <input
            type="number"
            name="directBuys"
            value={formData.directBuys}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Joined At:</label>
          <input
            type="date"
            name="joinedAt"
            value={formData.joinedAt}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rank:</label>
          <input
            type="text"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Reward Given:</label>
          <input
            type="checkbox"
            name="rewardGiven"
            checked={formData.rewardGiven}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Reward Amount:</label>
          <input
            type="number"
            name="rewardAmount"
            value={formData.rewardAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Reward At:</label>
          <input
            type="date"
            name="rewardAt"
            value={formData.rewardAt}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Manual Change:</label>
          <input
            type="checkbox"
            name="manualChange"
            checked={formData.manualChange}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Updated:</label>
          <input
            type="date"
            name="lastUpdated"
            value={formData.lastUpdated}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Level 1 Users (comma-separated):</label>
          <input
            type="text"
            name="level1Users"
            value={formData.level1Users}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Level 1 Buys:</label>
          <input
            type="number"
            name="level1Buys"
            value={formData.level1Buys}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Founder</button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default AddFounderForm;
