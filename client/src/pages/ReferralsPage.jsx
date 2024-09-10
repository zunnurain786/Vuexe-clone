import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./ReferralsPage.css"; // Import your custom CSS file

const ReferralsPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Referrals Page Layout", 10, 10); // Add more content as needed

    doc.save("referrals-page-layout.pdf");
  };

  return (
    <div className="referrals-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="referrals-header">
            {/* Referrals Header content */}
          </div>
          <div className="referrals-content">
            {/* Referrals Main Content */}
          </div>
          <div className="referrals-sidebar">
            {/* Referrals Sidebar content */}
          </div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReferralsPage;
