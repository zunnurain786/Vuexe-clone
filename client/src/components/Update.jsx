import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Update.css"; // Import your CSS for styling

const UpdateFounder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [founder, setFounder] = useState({
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFounder((prevFounder) => ({
      ...prevFounder,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8076/api/founders/${id}`, founder);
      toast.success("Founder updated successfully");
      navigate(`/founders/${id}`);
    } catch (error) {
      toast.error("Error updating founder");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="update-founder">
      <h2>Update Founder</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={founder.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalBuys">Total Buys</label>
          <input
            type="number"
            id="totalBuys"
            name="totalBuys"
            value={founder.totalBuys}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="directBuys">Direct Buys</label>
          <input
            type="number"
            id="directBuys"
            name="directBuys"
            value={founder.directBuys}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="joinedAt">Joined At</label>
          <input
            type="date"
            id="joinedAt"
            name="joinedAt"
            value={founder.joinedAt.split("T")[0]}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rank">Rank</label>
          <input
            type="text"
            id="rank"
            name="rank"
            value={founder.rank}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rewardGiven">Reward Given</label>
          <input
            type="checkbox"
            id="rewardGiven"
            name="rewardGiven"
            checked={founder.rewardGiven}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rewardAmount">Reward Amount</label>
          <input
            type="number"
            id="rewardAmount"
            name="rewardAmount"
            value={founder.rewardAmount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rewardAt">Reward At</label>
          <input
            type="date"
            id="rewardAt"
            name="rewardAt"
            value={founder.rewardAt ? founder.rewardAt.split("T")[0] : ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="manualChange">Manual Change</label>
          <input
            type="checkbox"
            id="manualChange"
            name="manualChange"
            checked={founder.manualChange}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastUpdated">Last Updated</label>
          <input
            type="date"
            id="lastUpdated"
            name="lastUpdated"
            value={founder.lastUpdated.split("T")[0]}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="level1Users">Level 1 Users</label>
          <input
            type="text"
            id="level1Users"
            name="level1Users"
            value={founder.level1Users}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="level1Buys">Level 1 Buys</label>
          <input
            type="number"
            id="level1Buys"
            name="level1Buys"
            value={founder.level1Buys}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          Update Founder
        </button>
      </form>
    </div>
  );
};

export default UpdateFounder;
