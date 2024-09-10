import React from "react";
import jsPDF from "jspdf";
import HorizontalCollapsedMenu from "./HorizontalCollapsedMenu";
import "./ContainerLayout.css"; // Import your custom CSS file

const ContainerLayout = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Container Layout", 10, 10); // You can add more detailed content here

    doc.save("container-layout.pdf");
  };

  return (
    <div className="container-layout">
      <HorizontalCollapsedMenu />
      <div className="main-content">
        <div className="container">
          <div className="section header">{/* Header content */}</div>
          <div className="section content">{/* Main content */}</div>
          <div className="section footer">{/* Footer content */}</div>
        </div>
        <button onClick={downloadPDF} className="download-btn">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ContainerLayout;
