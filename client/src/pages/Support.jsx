import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Support.css"; // Import your custom CSS file

const Support = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Support Layout", 10, 10);
    doc.autoTable({
      head: [["Support Layout"]],
      body: [["Placeholder for support layout"]],
    });
    doc.save("support-layout.pdf");
  };

  return (
    <div className="support-layout">
      <div className="support-header">Support Header</div>
      <div className="support-body">
        <div className="ticket-section">Ticket Section</div>
        <div className="faq-section">FAQ Section</div>
        <div className="contact-section">Contact Us Section</div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default Support;
