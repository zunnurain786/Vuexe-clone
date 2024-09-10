import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./KanbanLayout.css";

const KanbanLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Kanban Layout",
  });

  return (
    <div>
      <div className="kanban-container" ref={layoutRef}>
        <header className="kanban-header"></header>
        <main className="kanban-content">
          <div className="kanban-board">
            <div className="kanban-column">
              <h3>To Do</h3>
              <div className="kanban-card">Task 1</div>
              <div className="kanban-card">Task 2</div>
            </div>
            <div className="kanban-column">
              <h3>In Progress</h3>
              <div className="kanban-card">Task 3</div>
              <div className="kanban-card">Task 4</div>
            </div>
            <div className="kanban-column">
              <h3>Done</h3>
              <div className="kanban-card">Task 5</div>
              <div className="kanban-card">Task 6</div>
            </div>
          </div>
        </main>
        <footer className="kanban-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default KanbanLayout;
