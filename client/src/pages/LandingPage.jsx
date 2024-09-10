import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu";
import "./LandingPage.css"; // Import your custom CSS file

const LandingPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Landing Page Layout", 10, 10); // You can add more detailed content here

    doc.save("landing-page-layout.pdf");
  };

  return (
    <div className="landing-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="hero">{/* Hero section content */}</div>
          <div className="features">{/* Features section content */}</div>
          <div className="cta">{/* Call to Action section content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
