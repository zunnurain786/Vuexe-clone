import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./CheckoutLayout.css";

const CheckoutLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Checkout Layout",
  });

  return (
    <div>
      <div className="checkout-container" ref={layoutRef}>
        <header className="checkout-header"></header>
        <main className="checkout-content">
          <div className="checkout-details">
            <h2>Checkout Details</h2>
            <div className="checkout-item">
              <h3>Item 1</h3>
              <p>Price: $10.00</p>
            </div>
            <div className="checkout-item">
              <h3>Item 2</h3>
              <p>Price: $20.00</p>
            </div>
            <div className="checkout-item">
              <h3>Item 3</h3>
              <p>Price: $30.00</p>
            </div>
            <div className="checkout-summary">
              <h3>Total: $60.00</h3>
            </div>
            <button className="checkout-button">Complete Purchase</button>
          </div>
        </main>
        <footer className="checkout-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default CheckoutLayout;
