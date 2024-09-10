import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./NotificationsLayout.css";

const NotificationsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Notifications Layout",
  });

  return (
    <div>
      <div className="notifications-container" ref={layoutRef}>
        <header className="notifications-header"></header>
        <div className="notifications-body">
          <aside className="notifications-sidebar"></aside>
          <main className="notifications-content">
            <h2>Notifications</h2>
            <div className="notifications-list">
              <div className="notification-item">
                <p>
                  <strong>Notification Title 1</strong>
                </p>
                <p>
                  Notification details and description go here. This is where
                  you can include the message content.
                </p>
                <p className="notification-time">10 minutes ago</p>
              </div>
              <div className="notification-item">
                <p>
                  <strong>Notification Title 2</strong>
                </p>
                <p>
                  Notification details and description go here. This is where
                  you can include the message content.
                </p>
                <p className="notification-time">2 hours ago</p>
              </div>
              <div className="notification-item">
                <p>
                  <strong>Notification Title 3</strong>
                </p>
                <p>
                  Notification details and description go here. This is where
                  you can include the message content.
                </p>
                <p className="notification-time">Yesterday</p>
              </div>
              {/* Add more notification items as needed */}
            </div>
          </main>
        </div>
        <footer className="notifications-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default NotificationsLayout;
