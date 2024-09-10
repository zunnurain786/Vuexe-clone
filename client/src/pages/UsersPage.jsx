import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./UsersPage.css"; // Import your custom CSS file

const UsersPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Users Page Layout", 10, 10); // Add more content as needed

    doc.save("users-page-layout.pdf");
  };

  return (
    <div className="users-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="users-header">{/* Users Header content */}</div>
          <div className="users-content">{/* Users Main Content */}</div>
          <div className="users-sidebar">{/* Users Sidebar content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
