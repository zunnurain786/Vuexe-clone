import React from "react";
import jsPDF from "jspdf";
import "./UserInterface.css"; // Import your custom CSS file

const UserInterface = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("User Interface Layout", 10, 10); // Add more content as needed

    doc.save("user-interface-layout.pdf");
  };

  return (
    <div className="user-interface">
      <div className="ui-container">
        <div className="ui-element ui-header">Header</div>
        <div className="ui-element ui-sidebar">Sidebar</div>
        <div className="ui-element ui-main-content">Main Content</div>
        <div className="ui-element ui-footer">Footer</div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default UserInterface;
