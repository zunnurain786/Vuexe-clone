import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./AcademyLayout.css";

const AcademyLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Academy Layout",
  });

  return (
    <div>
      <div className="academy-container" ref={layoutRef}>
        <header className="academy-header"></header>
        <div className="academy-main">
          <div className="academy-sidebar"></div>
          <div className="academy-content">
            <div className="academy-card"></div>
            <div className="academy-card"></div>
            <div className="academy-card"></div>
          </div>
        </div>
        <footer className="academy-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default AcademyLayout;
