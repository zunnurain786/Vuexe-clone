import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./PagesPage.css"; // Import your custom CSS file

const PagesPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Pages Page Layout", 10, 10); // Add more content as needed

    doc.save("pages-page-layout.pdf");
  };

  return (
    <div className="pages-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="pages-header">{/* Pages Header content */}</div>
          <div className="pages-content">{/* Pages Main Content */}</div>
          <div className="pages-sidebar">{/* Pages Sidebar content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PagesPage;
