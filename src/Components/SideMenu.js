import React from "react";
import '../Styles/SideMenu-Styles.scss'

function SideMenu(props) {
  const {sideMenu} = props;
  return (
    <div className={`${sideMenu ? "side-menu-active" : "side-menu"}`}>
      <div className="side-menu-container">
        <div className="side-menu-header">
          <div className="side-menu-exit" onClick={props.changeSideMenu}>X</div>
          
        </div>
        <div className="side-menu-body"></div>
      </div>
    </div>
  )
}

export default SideMenu;
