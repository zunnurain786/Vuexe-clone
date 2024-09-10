import React from "react";
import jsPDF from "jspdf";
import "./FormLayouts.css"; // Import your custom CSS file

const FormLayouts = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Form Layouts", 10, 10); // Add more content as needed

    doc.save("form-layouts.pdf");
  };

  return (
    <div className="form-layouts">
      <div className="form-layout">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
      </div>
      <div className="form-layout">
        <div className="form-group">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" />
        </div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default FormLayouts;
