import React from "react";
import "../Styles/Nav-Styles.scss";

function NavBar(props) {
  const {changeMode, darkMode, changeSideMenu} = props;
  return (
    <div className={`nav-container ${darkMode ? "nav-container-dark" : ""}`}>
      <span className="nav-menu-container nav-menu-container-dark" onClick={changeSideMenu}>
        <div></div>
        <div></div>
        <div></div>
      </span>
      <div className="nav-date">
        <p>TODAY</p>
      </div>
      <div className="nav-mode-container">
        <span className="nav-mode-option">LIGHT</span>
        <label className="switch">
          <input type="checkbox" onClick={changeMode} />
          <span className="slider round"></span>
        </label>
        <span className="nav-mode-option">DARK</span>
      </div>
    </div>
  );
}

export default NavBar;
