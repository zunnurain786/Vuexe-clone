import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./AnalyticsLayout.css";

const AnalyticsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Analytics Layout",
  });

  return (
    <div>
      <div className="analytics-container" ref={layoutRef}>
        <header className="analytics-header"></header>
        <div className="analytics-main">
          <div className="analytics-sidebar"></div>
          <div className="analytics-content">
            <div className="analytics-card"></div>
            <div className="analytics-card"></div>
            <div className="analytics-card"></div>
            <div className="analytics-card"></div>
          </div>
        </div>
        <footer className="analytics-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default AnalyticsLayout;
