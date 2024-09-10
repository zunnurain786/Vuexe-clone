import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Dashboard Layout",
  });

  return (
    <div>
      <div className="dashboard-container" ref={layoutRef}>
        <header className="dashboard-header"></header>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"></aside>
          <main className="dashboard-content">
            <h2>Dashboard Overview</h2>
            <div className="dashboard-widgets">
              <div className="dashboard-widget">Widget 1</div>
              <div className="dashboard-widget">Widget 2</div>
              <div className="dashboard-widget">Widget 3</div>
              <div className="dashboard-widget">Widget 4</div>
            </div>
          </main>
        </div>
        <footer className="dashboard-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default DashboardLayout;
