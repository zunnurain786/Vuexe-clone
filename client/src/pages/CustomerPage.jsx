import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./CustomerPage.css"; // Import your custom CSS file

const CustomerPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Customer Page Layout", 10, 10); // Add more content as needed

    doc.save("customer-page-layout.pdf");
  };

  return (
    <div className="customer-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="customer-header">{/* Customer Header content */}</div>
          <div className="customer-content">{/* Customer Main Content */}</div>
          <div className="customer-sidebar">
            {/* Customer Sidebar content */}
          </div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CustomerPage;
