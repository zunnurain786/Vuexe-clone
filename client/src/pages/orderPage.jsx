import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./OrderPage.css"; // Import your custom CSS file

const OrderPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Order Page Layout", 10, 10); // Add more content as needed

    doc.save("order-page-layout.pdf");
  };

  return (
    <div className="order-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="order-header">{/* Order Header content */}</div>
          <div className="order-content">{/* Order Main Content */}</div>
          <div className="order-sidebar">{/* Order Sidebar content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
