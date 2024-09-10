import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./NoNavbarLayout.css";

const NoNavbarLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "No Navbar Layout",
  });

  return (
    <div>
      <div className="no-navbar-container" ref={layoutRef}>
        <header className="no-navbar-header"></header>
        <main className="no-navbar-content">
          <div className="content-card"></div>
          <div className="content-card"></div>
          <div className="content-card"></div>
        </main>
        <footer className="no-navbar-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default NoNavbarLayout;
