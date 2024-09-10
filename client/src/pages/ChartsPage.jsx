import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./ChartsPage.css"; // Import your custom CSS file

const ChartsPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Charts Page Layout", 10, 10); // Add more content as needed

    doc.save("charts-page-layout.pdf");
  };

  return (
    <div className="charts-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="charts-header">{/* Charts Header content */}</div>
          <div className="charts-content">{/* Charts Main Content */}</div>
          <div className="charts-sidebar">{/* Charts Sidebar content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ChartsPage;
