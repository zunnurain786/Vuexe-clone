import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/auth";
import "./Login.css";

const SigninPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useAuth();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8076/api/signin", {
        email,
        password,
      });

      if (res.data.success) {
        toast.success("Login successful");
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
        toast.error(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
      toast.error(
        err.response
          ? err.response.data.message
          : "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit} className="signin-form">
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark" disabled={loading}>
          {loading ? "Signing In..." : "SIGN IN"}
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
