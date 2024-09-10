import React, { useState } from "react";
import "./CollapsedMenu.css"; // Import your custom CSS file

const CollapsedMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapsed-menu ${isCollapsed ? "collapsed" : ""}`}>
      <button onClick={toggleMenu} className="toggle-btn">
        {isCollapsed ? "Expand Menu" : "Collapse Menu"}
      </button>
      <div className={`menu-content ${isCollapsed ? "hidden" : ""}`}>
        <ul>
          <li>
            <a href="#section1">Section 1</a>
          </li>
          <li>
            <a href="#section2">Section 2</a>
          </li>
          <li>
            <a href="#section3">Section 3</a>
          </li>
          <li>
            <a href="#section4">Section 4</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CollapsedMenu;
