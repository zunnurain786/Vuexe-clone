import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./FluidLayout.css";

const FluidLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Fluid Layout",
  });

  return (
    <div>
      <div className="fluid-container" ref={layoutRef}>
        <header className="fluid-header"></header>
        <main className="fluid-content">
          <div className="content-card"></div>
          <div className="content-card"></div>
          <div className="content-card"></div>
        </main>
        <footer className="fluid-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default FluidLayout;
