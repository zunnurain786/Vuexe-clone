import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu"; // Import the horizontal menu component
import "./CalendarPage.css"; // Import your custom CSS file

const CalendarPage = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Calendar Page Layout", 10, 10); // Add more content as needed

    doc.save("calendar-page-layout.pdf");
  };

  return (
    <div className="calendar-page">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="calendar-header">{/* Calendar Header content */}</div>
          <div className="calendar-content">{/* Calendar Main Content */}</div>
          <div className="calendar-sidebar">
            {/* Calendar Sidebar content */}
          </div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
