import React from "react";
import "../Styles/Nav-Styles.scss";

function NavBar(props) {
  return (
    <div className="nav-container">
      <span className="nav-menu-container">
        <div></div>
        <div></div>
        <div></div>
      </span>
      <div className="nav-date">
        <p>TODAY</p>
      </div>
      <div className="nav-logo">
      <div className="nav-mode-container">
        <span>Light</span>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
        <span>Dark</span>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
