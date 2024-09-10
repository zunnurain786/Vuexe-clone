import React from "react";
import jsPDF from "jspdf";
import "./Icons.css"; // Import your custom CSS file

const Icons = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Icons Layout", 10, 10); // Add more content as needed

    doc.save("icons-layout.pdf");
  };

  return (
    <div className="icons-layout">
      <div className="icons-container">
        <div className="icon-item">Icon 1</div>
        <div className="icon-item">Icon 2</div>
        <div className="icon-item">Icon 3</div>
        <div className="icon-item">Icon 4</div>
        <div className="icon-item">Icon 5</div>
        <div className="icon-item">Icon 6</div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default Icons;
