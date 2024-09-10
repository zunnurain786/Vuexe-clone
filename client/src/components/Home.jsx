import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [referrals, setReferrals] = useState({
    totalEarning: 0,
    unpaidEarning: 0,
    totalSignup: 0,
    conversionRate: 0,
    referredUsers: [],
  });

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await fetch("http://localhost:8076/api/activeusers");
        const data = await response.json();

        if (data && data.success) {
          setReferrals({
            totalEarning: data.totalEarning || 0,
            unpaidEarning: data.unpaidEarning || 0,
            totalSignup: data.totalSignup || 0,
            conversionRate: data.conversionRate || 0,
            referredUsers: data.data || [],
          });
        } else {
          console.error("API did not return expected data:", data);
          setReferrals({
            totalEarning: 0,
            unpaidEarning: 0,
            totalSignup: 0,
            conversionRate: 0,
            referredUsers: [],
          });
        }
      } catch (error) {
        console.error("Error fetching referrals:", error);
        setReferrals({
          totalEarning: 0,
          unpaidEarning: 0,
          totalSignup: 0,
          conversionRate: 0,
          referredUsers: [],
        });
      }
    };

    fetchReferrals();
  }, []);

  return (
    <div className="home-page">
      {/* First Row */}
      <div className="row">
        <div className="card">Total Earning: ${referrals.totalEarning}</div>
        <div className="card">Unpaid Earning: ${referrals.unpaidEarning}</div>
        <div className="card">Signups: {referrals.totalSignup}</div>
        <div className="card">Conversion Rate: {referrals.conversionRate}%</div>
      </div>

      {/* Second Row */}
      <div className="row how-to-use">
        <h2>How to Use</h2>
        <div className="options">
          <div className="option">
            <span role="img" aria-label="airplane">
              ✈️
            </span>
            <p>Create and validate your referral link and get $50</p>
          </div>
          <div className="option">
            <span role="img" aria-label="signup">
              📝
            </span>
            <p>For every new signup, you get 10%</p>
          </div>
          <div className="option">
            <span role="img" aria-label="telegram">
              📱
            </span>
            <p>Get your friends to generate a link and get $100</p>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="row invite-friends">
        <h2>Invite Your Friends</h2>
        <button className="invite-section">
          <Link to="/new-reffer">Refer a New One</Link>
        </button>
      </div>

      {/* Referrals List */}
      <div className="row referrals-list">
        <h2>Referred Users</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Referral ID</th>
            </tr>
          </thead>
          <tbody>
            {referrals.referredUsers.length > 0 ? (
              referrals.referredUsers.map((referral, index) => (
                <tr key={index}>
                  <td>{referral.user.name}</td>
                  <td>{referral._id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No referrals found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button>
        <Link to="/founders">Total Number of Employees</Link>
      </button>
    </div>
  );
};

export default HomePage;
