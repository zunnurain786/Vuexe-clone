import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./DataTables.css"; // Import your custom CSS file

const DataTables = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Data Tables Layout", 10, 10);
    doc.autoTable({
      head: [["Column 1", "Column 2", "Column 3"]],
      body: [
        ["Row 1", "Row 1", "Row 1"],
        ["Row 2", "Row 2", "Row 2"],
        ["Row 3", "Row 3", "Row 3"],
      ],
    });
    doc.save("data-tables-layout.pdf");
  };

  return (
    <div className="data-tables-layout">
      <table className="styled-data-table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
          </tr>
        </tbody>
      </table>

      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default DataTables;
