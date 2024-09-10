import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/auth";
import zxcvbn from "zxcvbn"; // Import zxcvbn for password strength checking
import "./Signup.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useAuth();
  const [passwordScore, setPasswordScore] = useState(0);

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle password strength evaluation
  const evaluatePasswordStrength = (password) => {
    const evaluation = zxcvbn(password);
    setPasswordScore(evaluation.score);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 8) {
      toast.error(
        "Password should be at least 8 characters long. Please choose a stronger password."
      );
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8076/api/signup", {
        username,
        email,
        password,
        role,
      });

      if (res.data.success) {
        toast.success("Signup successful");
        setAuth({
          ...auth,
          user: {
            id: res.data._id,
            username: res.data.username,
            email: res.data.email,
            role: res.data.role,
          },
          token: res.data.token,
        });
        localStorage.setItem(
          "auth",
          JSON.stringify({ token: res.data.token, user: res.data.user })
        );
        navigate("/"); // Navigate to the previous page
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error(
        "Signup error:",
        err.response ? err.response.data : err.message
      );
      toast.error(
        err.response
          ? err.response.data.message
          : "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthMessage = () => {
    switch (passwordScore) {
      case 0:
        return "";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordScore) {
      case 0:
        return "";
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "yellowgreen";
      case 4:
        return "green";
      default:
        return "";
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              evaluatePasswordStrength(e.target.value); // Evaluate password strength
            }}
            placeholder="Enter password"
            required
          />
          {/* Display password strength */}
          <div
            className="password-strength"
            style={{ color: getPasswordStrengthColor() }}
          >
            Password Strength: {getPasswordStrengthMessage()}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark" disabled={loading}>
          {loading ? "Registering..." : "REGISTER"}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
