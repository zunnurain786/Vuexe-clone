import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./founders.css";

function founders() {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchFounders = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8076/api/founders", {
        method: "GET", // Ensure GET method
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("API response data:", data); // Log the response to verify it's an array

      // Ensure founders is an array before setting state
      setFounders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching founders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFounders();
  }, []);

  const handleAddressClick = (id) => {
    navigate(`/founders/${id}`); // Navigate to detailed page with founder ID
  };

  const handleAddFounder = () => {
    navigate("/founders/new"); // Navigate to add new founder page
  };

  return (
    <div className="home-container">
      <h1 className="title">Founder Details</h1>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <table className="founders-table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Total Buys</th>
                <th>Direct Buys</th>
                <th>Joined At</th>
              </tr>
            </thead>
            <tbody>
              {founders.length > 0 ? (
                founders.map((founder) => (
                  <tr key={founder._id}>
                    <td
                      onClick={() => handleAddressClick(founder._id)}
                      className="clickable-address"
                    >
                      {founder.address}
                    </td>
                    <td>{founder.totalBuys}</td>
                    <td>{founder.directBuys}</td>
                    <td>{new Date(founder.joinedAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={handleAddFounder} className="btn-add-founder">
            Add New Founder
          </button>
        </>
      )}
    </div>
  );
}

export default founders;
