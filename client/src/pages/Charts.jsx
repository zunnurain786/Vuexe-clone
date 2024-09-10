import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Charts.css"; // Import your custom CSS file

const Charts = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Charts Layout", 10, 10);
    doc.autoTable({
      head: [["Chart Layout"]],
      body: [["Placeholder for charts layout"]],
    });
    doc.save("charts-layout.pdf");
  };

  return (
    <div className="charts-layout">
      <div className="chart-placeholder">Chart 1</div>
      <div className="chart-placeholder">Chart 2</div>
      <div className="chart-placeholder">Chart 3</div>

      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default Charts;
