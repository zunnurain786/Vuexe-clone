import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ShippingDeliveryLayout.css";

const ShippingDeliveryLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Shipping & Delivery Layout",
  });

  return (
    <div>
      <div className="shipping-delivery-container" ref={layoutRef}>
        <header className="shipping-delivery-header"></header>
        <div className="shipping-delivery-body">
          <aside className="shipping-delivery-sidebar"></aside>
          <main className="shipping-delivery-content">
            <h2>Shipping & Delivery</h2>
            <div className="shipping-info">
              <div className="shipping-info-item">
                <h3>Shipping Methods</h3>
                <p>Standard Shipping: 5-7 business days</p>
                <p>Express Shipping: 2-3 business days</p>
                <p>Overnight Shipping: 1 business day</p>
              </div>
              <div className="shipping-info-item">
                <h3>Delivery Areas</h3>
                <p>We deliver to all major cities and towns.</p>
                <p>International shipping available.</p>
              </div>
              <div className="shipping-info-item">
                <h3>Shipping Costs</h3>
                <p>Standard Shipping: $5.00</p>
                <p>Express Shipping: $15.00</p>
                <p>Overnight Shipping: $25.00</p>
              </div>
              <div className="shipping-info-item">
                <h3>Tracking Orders</h3>
                <p>Track your order status via our website.</p>
                <p>
                  Use the tracking number provided in your confirmation email.
                </p>
              </div>
            </div>
          </main>
        </div>
        <footer className="shipping-delivery-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default ShippingDeliveryLayout;
