import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./EmailLayout.css";

const EmailLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Email Layout",
  });

  return (
    <div>
      <div className="email-container" ref={layoutRef}>
        <header className="email-header"></header>
        <main className="email-content">
          <div className="email-body">
            <h2>Subject: Welcome to Our Service!</h2>
            <p>Dear User,</p>
            <p>
              Thank you for signing up for our service. We are excited to have
              you with us!
            </p>
            <p>Best Regards,</p>
            <p>The Team</p>
          </div>
        </main>
        <footer className="email-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default EmailLayout;
