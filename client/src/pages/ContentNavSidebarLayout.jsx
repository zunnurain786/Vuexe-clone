import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ContentNavSidebarLayout.css";

const ContentNavSidebarLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Content Nav + Sidebar Layout",
  });

  return (
    <div>
      <div className="content-nav-sidebar-container" ref={layoutRef}>
        <header className="content-nav-sidebar-header"></header>
        <div className="content-nav-sidebar-main">
          <nav className="content-nav-sidebar-sidebar"></nav>
          <div className="content-nav-sidebar-content">
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
          </div>
        </div>
        <footer className="content-nav-sidebar-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default ContentNavSidebarLayout;
