import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu";
import "./PaymentPage.css"; // Import your custom CSS file

const PaymentPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Payment Page Layout", 10, 10); // You can add more detailed content here

    doc.save("payment-page-layout.pdf");
  };

  return (
    <div className="payment-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="payment-header">{/* Payment Header content */}</div>
          <div className="payment-details">{/* Payment Details content */}</div>
          <div className="payment-summary">{/* Payment Summary content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
