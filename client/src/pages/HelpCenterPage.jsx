import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./HelpCenterPage.css"; // Import your custom CSS file

const HelpCenterPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Help Center Layout", 10, 10); // Add more content as needed

    doc.save("help-center-page-layout.pdf");
  };

  return (
    <div className="help-center-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="help-center-header">
            {/* Help Center Header content */}
          </div>
          <div className="help-center-content">
            {/* Help Center Main Content */}
          </div>
          <div className="help-center-sidebar">
            {/* Help Center Sidebar content */}
          </div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default HelpCenterPage;
