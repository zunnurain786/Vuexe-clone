import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./LeafletMaps.css"; // Import your custom CSS file

const LeafletMaps = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Leaflet Maps Layout", 10, 10);
    doc.autoTable({
      head: [["Map Layout"]],
      body: [["Placeholder for leaflet maps layout"]],
    });
    doc.save("leaflet-maps-layout.pdf");
  };

  return (
    <div className="leaflet-maps-layout">
      <div className="map-placeholder">Map 1</div>
      <div className="map-placeholder">Map 2</div>
      <div className="map-placeholder">Map 3</div>

      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
    </div>
  );
};

export default LeafletMaps;
