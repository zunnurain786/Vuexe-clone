import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ModalExamplesLayout.css";

const ModalExamplesLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Modal Examples Layout",
  });

  return (
    <div>
      <div className="modal-examples-container" ref={layoutRef}>
        <header className="modal-examples-header"></header>
        <div className="modal-examples-body">
          <aside className="modal-examples-sidebar"></aside>
          <main className="modal-examples-content">
            <h2>Modal Examples</h2>
            <div className="modal-examples-details">
              <div className="modal-examples-section">
                <h3>Simple Modal</h3>
                <button className="modal-button">Open Simple Modal</button>
                <div className="modal-example simple-modal">
                  <div className="modal-content">
                    <h4>Simple Modal Title</h4>
                    <p>This is a simple modal example.</p>
                    <button className="close-button">Close</button>
                  </div>
                </div>
              </div>
              <div className="modal-examples-section">
                <h3>Modal with Header</h3>
                <button className="modal-button">Open Modal with Header</button>
                <div className="modal-example header-modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4>Modal Header</h4>
                      <button className="close-button">Close</button>
                    </div>
                    <div className="modal-body">
                      <p>This modal includes a header section.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-examples-section">
                <h3>Modal with Footer</h3>
                <button className="modal-button">Open Modal with Footer</button>
                <div className="modal-example footer-modal">
                  <div className="modal-content">
                    <div className="modal-body">
                      <p>This modal includes a footer section.</p>
                    </div>
                    <div className="modal-footer">
                      <button className="footer-button">Confirm</button>
                      <button className="close-button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-examples-section">
                <h3>Fullscreen Modal</h3>
                <button className="modal-button">Open Fullscreen Modal</button>
                <div className="modal-example fullscreen-modal">
                  <div className="modal-content">
                    <h4>Fullscreen Modal</h4>
                    <p>This is a fullscreen modal example.</p>
                    <button className="close-button">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="modal-examples-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default ModalExamplesLayout;
