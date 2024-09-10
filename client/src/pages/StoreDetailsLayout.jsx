import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./StoreDetailsLayout.css";

const StoreDetailsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Store Details Layout",
  });

  return (
    <div>
      <div className="store-details-container" ref={layoutRef}>
        <header className="store-details-header"></header>
        <div className="store-details-body">
          <aside className="store-details-sidebar"></aside>
          <main className="store-details-content">
            <h2>Store Details</h2>
            <div className="store-info">
              <div className="store-info-item">
                <h3>Store Name</h3>
                <p>Awesome Store</p>
              </div>
              <div className="store-info-item">
                <h3>Location</h3>
                <p>123 Main Street, Cityville</p>
              </div>
              <div className="store-info-item">
                <h3>Contact</h3>
                <p>(123) 456-7890</p>
              </div>
              <div className="store-info-item">
                <h3>Email</h3>
                <p>info@awesomestore.com</p>
              </div>
              <div className="store-info-item">
                <h3>Operating Hours</h3>
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </main>
        </div>
        <footer className="store-details-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default StoreDetailsLayout;
