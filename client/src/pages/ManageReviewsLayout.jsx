import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ManageReviewsLayout.css";

const ManageReviewsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Manage Reviews Layout",
  });

  return (
    <div>
      <div className="manage-reviews-container" ref={layoutRef}>
        <header className="manage-reviews-header"></header>
        <div className="manage-reviews-body">
          <aside className="manage-reviews-sidebar"></aside>
          <main className="manage-reviews-content">
            <h2>Manage Reviews</h2>
            <div className="review-cards">
              <div className="review-card">
                <p>
                  <strong>Review 1:</strong> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <strong>Rating:</strong> ★★★☆☆
                </p>
              </div>
              <div className="review-card">
                <p>
                  <strong>Review 2:</strong> Consectetur adipiscing elit.
                </p>
                <p>
                  <strong>Rating:</strong> ★★★★☆
                </p>
              </div>
              <div className="review-card">
                <p>
                  <strong>Review 3:</strong> Sed do eiusmod tempor incididunt.
                </p>
                <p>
                  <strong>Rating:</strong> ★★★★☆
                </p>
              </div>
              <div className="review-card">
                <p>
                  <strong>Review 4:</strong> Ut enim ad minim veniam.
                </p>
                <p>
                  <strong>Rating:</strong> ★★★☆☆
                </p>
              </div>
            </div>
          </main>
        </div>
        <footer className="manage-reviews-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default ManageReviewsLayout;
