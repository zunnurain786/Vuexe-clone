import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./InvoiceLayout.css";

const InvoiceLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Invoice Layout",
  });

  return (
    <div>
      <div className="invoice-container" ref={layoutRef}>
        <header className="invoice-header"></header>
        <div className="invoice-body">
          <aside className="invoice-sidebar"></aside>
          <main className="invoice-content">
            <h2>Invoice</h2>
            <div className="invoice-details">
              <div className="invoice-section">
                <h3>Invoice Number</h3>
                <p>#INV123456</p>
              </div>
              <div className="invoice-section">
                <h3>Customer Details</h3>
                <p>Name: John Doe</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
                <p>Email: john.doe@example.com</p>
              </div>
              <div className="invoice-section">
                <h3>Billing Details</h3>
                <p>Item: Widget A</p>
                <p>Quantity: 2</p>
                <p>Price: $50.00</p>
                <p>Total: $100.00</p>
              </div>
              <div className="invoice-section">
                <h3>Payment Status</h3>
                <p>Paid</p>
              </div>
            </div>
          </main>
        </div>
        <footer className="invoice-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default InvoiceLayout;
