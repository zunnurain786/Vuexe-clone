import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./show.css"; // Import your CSS for styling

const FounderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [founder, setFounder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFounder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8076/api/founders/${id}`
        );
        setFounder(response.data);
      } catch (error) {
        toast.error("Error fetching founder details");
      } finally {
        setLoading(false);
      }
    };

    fetchFounder();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8076/api/founders/${id}`);
      toast.success("Founder deleted successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error deleting founder");
    }
  };

  const handleUpdate = () => {
    navigate(`/founders/${id}/update`);
  };

  const handleHome = () => {
    navigate("/"); // Navigate to home
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!founder) {
    return <p>Founder not found</p>;
  }

  return (
    <div className="founder-details">
      <div className="buttons">
        <button onClick={handleHome} className="btn-home">
          Home
        </button>
      </div>
      <h2>Founder Details</h2>
      <div className="details-container">
        <p>
          <strong>Address:</strong> {founder.address}
        </p>
        <p>
          <strong>Total Buys:</strong> {founder.totalBuys}
        </p>
        <p>
          <strong>Direct Buys:</strong> {founder.directBuys}
        </p>
        <p>
          <strong>Joined At:</strong>{" "}
          {new Date(founder.joinedAt).toLocaleDateString()}
        </p>
        <p>
          <strong>Rank:</strong> {founder.rank}
        </p>
        <p>
          <strong>Reward Given:</strong> {founder.rewardGiven ? "Yes" : "No"}
        </p>
        <p>
          <strong>Reward Amount:</strong> {founder.rewardAmount}
        </p>
        <p>
          <strong>Reward At:</strong>{" "}
          {founder.rewardAt
            ? new Date(founder.rewardAt).toLocaleDateString()
            : "N/A"}
        </p>
        <p>
          <strong>Manual Change:</strong> {founder.manualChange ? "Yes" : "No"}
        </p>
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(founder.lastUpdated).toLocaleDateString()}
        </p>
        <p>
          <strong>Level 1 Users:</strong> {founder.level1Users.join(", ")}
        </p>
        <p>
          <strong>Level 1 Buys:</strong> {founder.level1Buys}
        </p>
      </div>
      <div className="buttons">
        <button onClick={handleUpdate} className="btn-update">
          Update
        </button>
        <button onClick={handleDelete} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FounderDetails;
