import React from "react";
import jsPDF from "jspdf";
import "./WizardExamples.css"; // Import your custom CSS file

const WizardExamples = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Wizard Examples Page Layout", 10, 10); // Add more content as needed

    doc.save("wizard-examples-layout.pdf");
  };

  return (
    <div className="wizard-examples">
      <div className="container">
        <div className="wizard-header">{/* Wizard Header content */}</div>
        <div className="wizard-steps">{/* Wizard Steps content */}</div>
        <div className="wizard-sidebar">{/* Wizard Sidebar content */}</div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default WizardExamples;
