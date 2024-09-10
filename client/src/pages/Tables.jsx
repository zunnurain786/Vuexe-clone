import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Tables.css"; // Import your custom CSS file

const Tables = () => {
  const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", age: 23, email: "alice@example.com" },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Tables Layout", 10, 10);
    doc.autoTable({
      head: [["ID", "Name", "Age", "Email"]],
      body: data.map((row) => [row.id, row.name, row.age, row.email]),
    });
    doc.save("tables-layout.pdf");
  };

  return (
    <div className="tables-layout">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default Tables;
