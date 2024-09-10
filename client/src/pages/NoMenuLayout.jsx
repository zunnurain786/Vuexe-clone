import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./NoMenuLayout.css";

const NoMenuLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "No Menu Layout",
  });

  return (
    <div>
      <div className="no-menu-container" ref={layoutRef}>
        <header className="no-menu-header"></header>
        <main className="no-menu-content">
          <div className="content-card"></div>
          <div className="content-card"></div>
          <div className="content-card"></div>
        </main>
        <footer className="no-menu-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default NoMenuLayout;
