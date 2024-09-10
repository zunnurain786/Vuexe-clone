import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./RolesPermissionsLayout.css";

const RolesPermissionsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Roles & Permissions Layout",
  });

  return (
    <div>
      <div className="roles-permissions-container" ref={layoutRef}>
        <header className="roles-permissions-header"></header>
        <div className="roles-permissions-body">
          <aside className="roles-permissions-sidebar"></aside>
          <main className="roles-permissions-content">
            <h2>Roles & Permissions</h2>
            <div className="roles-permissions-details">
              <div className="roles-permissions-section">
                <h3>Role Management</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Role Name</th>
                      <th>Description</th>
                      <th>Permissions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Admin</td>
                      <td>Full access to all features</td>
                      <td>Read, Write, Delete</td>
                    </tr>
                    <tr>
                      <td>Editor</td>
                      <td>Can edit content</td>
                      <td>Read, Write</td>
                    </tr>
                    <tr>
                      <td>Viewer</td>
                      <td>Can only view content</td>
                      <td>Read</td>
                    </tr>
                    {/* Add more roles as needed */}
                  </tbody>
                </table>
              </div>
              <div className="roles-permissions-section">
                <h3>Permission Management</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Permission Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Read</td>
                      <td>Access to view content</td>
                    </tr>
                    <tr>
                      <td>Write</td>
                      <td>Access to modify content</td>
                    </tr>
                    <tr>
                      <td>Delete</td>
                      <td>Access to remove content</td>
                    </tr>
                    {/* Add more permissions as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
        <footer className="roles-permissions-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default RolesPermissionsLayout;
