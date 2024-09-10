import React from "react";
import jsPDF from "jspdf";
import "./Cards.css"; // Import your custom CSS file

const Cards = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Cards Page Layout", 10, 10); // Add more content as needed

    doc.save("cards-layout.pdf");
  };

  return (
    <div className="cards">
      <div className="card-container">
        <div className="card">
          <div className="card-header">Card 1</div>
          <div className="card-body">Content for Card 1</div>
          <div className="card-footer">Footer for Card 1</div>
        </div>
        <div className="card">
          <div className="card-header">Card 2</div>
          <div className="card-body">Content for Card 2</div>
          <div className="card-footer">Footer for Card 2</div>
        </div>
        <div className="card">
          <div className="card-header">Card 3</div>
          <div className="card-body">Content for Card 3</div>
          <div className="card-footer">Footer for Card 3</div>
        </div>
      </div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default Cards;
