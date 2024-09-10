import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Documentation.css"; // Import your custom CSS file

const Documentation = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Documentation Layout", 10, 10);
    doc.autoTable({
      head: [["Documentation Layout"]],
      body: [["Placeholder for documentation layout"]],
    });
    doc.save("documentation-layout.pdf");
  };

  return (
    <div className="documentation-layout">
      <div className="doc-header">Documentation Header</div>
      <div className="doc-body">
        <div className="overview-section">Overview Section</div>
        <div className="getting-started-section">Getting Started Section</div>
        <div className="api-docs-section">API Documentation Section</div>
        <div className="examples-section">Examples Section</div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default Documentation;
