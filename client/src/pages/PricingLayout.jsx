import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./PricingLayout.css";

const PricingLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Pricing Layout",
  });

  return (
    <div>
      <div className="pricing-container" ref={layoutRef}>
        <header className="pricing-header"></header>
        <main className="pricing-content">
          <div className="pricing-card">
            <h2>Basic Plan</h2>
            <p>$10/month</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h2>Standard Plan</h2>
            <p>$20/month</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h2>Premium Plan</h2>
            <p>$30/month</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </div>
        </main>
        <footer className="pricing-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default PricingLayout;
