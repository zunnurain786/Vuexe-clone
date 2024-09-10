import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./AcademyPage.css"; // Import your custom CSS file

const AcademyPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Academy Page Layout", 10, 10); // Add more content as needed

    doc.save("academy-page-layout.pdf");
  };

  return (
    <div className="academy-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="academy-header">{/* Academy Header content */}</div>
          <div className="academy-content">{/* Academy Main Content */}</div>
          <div className="academy-sidebar">{/* Academy Sidebar content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default AcademyPage;
