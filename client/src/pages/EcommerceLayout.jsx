import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./EcommerceLayout.css";

const EcommerceLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "E-commerce Layout",
  });

  return (
    <div>
      <div className="ecommerce-container" ref={layoutRef}>
        <header className="ecommerce-header"></header>
        <div className="ecommerce-main">
          <div className="ecommerce-sidebar"></div>
          <div className="ecommerce-content">
            <div className="ecommerce-card"></div>
            <div className="ecommerce-card"></div>
            <div className="ecommerce-card"></div>
            <div className="ecommerce-card"></div>
          </div>
        </div>
        <footer className="ecommerce-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default EcommerceLayout;
