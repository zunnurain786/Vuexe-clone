import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./AuthenticationsLayout.css";

const AuthenticationsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Authentications Layout",
  });

  return (
    <div>
      <div className="authentications-container" ref={layoutRef}>
        <header className="authentications-header"></header>
        <div className="authentications-body">
          <aside className="authentications-sidebar"></aside>
          <main className="authentications-content">
            <h2>Authentications</h2>
            <div className="authentications-details">
              <div className="authentications-section">
                <h3>Login</h3>
                <p>Login form with username and password fields.</p>
              </div>
              <div className="authentications-section">
                <h3>Register</h3>
                <p>
                  Registration form with username, email, and password fields.
                </p>
              </div>
              <div className="authentications-section">
                <h3>Forgot Password</h3>
                <p>Password reset form with email field.</p>
              </div>
              <div className="authentications-section">
                <h3>Two-Factor Authentication</h3>
                <p>Two-factor authentication setup and verification form.</p>
              </div>
            </div>
          </main>
        </div>
        <footer className="authentications-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default AuthenticationsLayout;
