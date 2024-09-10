// src/components/Pagenotfound.js
import React from "react";
import { Link } from "react-router-dom";
import "./Pagenotfound.css"; // Import the CSS file

export default function Pagenotfound() {
  return (
    <>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </>
  );
}
