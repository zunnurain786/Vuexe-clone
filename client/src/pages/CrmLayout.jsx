import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./CrmLayout.css";

const CrmLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "CRM Layout",
  });

  return (
    <div>
      <div className="crm-container" ref={layoutRef}>
        <header className="crm-header"></header>
        <div className="crm-main">
          <div className="crm-sidebar"></div>
          <div className="crm-content">
            <div className="crm-section"></div>
            <div className="crm-section"></div>
            <div className="crm-section"></div>
          </div>
        </div>
        <footer className="crm-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default CrmLayout;
