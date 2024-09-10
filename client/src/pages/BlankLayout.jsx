import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./BlankLayout.css";

const BlankLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Blank Layout",
  });

  return (
    <div>
      <div className="blank-container" ref={layoutRef}>
        <header className="blank-header"></header>
        <main className="blank-content">
          {/* Add any content here if needed */}
        </main>
        <footer className="blank-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default BlankLayout;
