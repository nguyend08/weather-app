import React from "react";

function AddCity(props) {
  const { darkMode } = props;
  return (
    <div className="add-container">
      <div
        className={`add-button ${darkMode ? "add-button-dark" : ""}`}
        onClick={props.changeTransparent}
      >
        <h4 className="add-header">ADD CITY</h4>
        <div className="add-plus add-plus-dark"></div>
      </div>
    </div>
  );
}
export default AddCity;
