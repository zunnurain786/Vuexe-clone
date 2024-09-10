import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ContentNavbarLayout.css";

const ContentNavbarLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Content Navbar Layout",
  });

  return (
    <div>
      <div className="content-navbar-container" ref={layoutRef}>
        <header className="content-navbar-header"></header>
        <div className="content-navbar-main">
          <nav className="content-navbar-nav"></nav>
          <div className="content-navbar-content">
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
          </div>
        </div>
        <footer className="content-navbar-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default ContentNavbarLayout;
