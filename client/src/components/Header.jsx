import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth";
import { FaSearch, FaGlobe, FaMoon, FaBell } from "react-icons/fa";
import "./Header.css";

const Header = ({ isCompact }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/signin");
  };

  return (
    <header className={`header ${isCompact ? "compact-sidebar" : ""}`}>
      <div className="toolbar">
        <div className="nav-icons">
          <button onClick={toggleSearch} className="nav-icon">
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search…"
            className={`search-box ${searchOpen ? "open" : ""}`}
            aria-label="search"
          />
          <button className="nav-icon">
            <FaGlobe />
          </button>
          <button className="nav-icon">
            <FaMoon />
          </button>
          <button className="nav-icon">
            <FaBell />
          </button>

          <div className="auth-buttons">
            {auth?.user ? (
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            ) : (
              <>
                <Link to="/signin" className="auth-link">
                  Sign In/
                </Link>

                <Link to="/signup" className="auth-link">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
