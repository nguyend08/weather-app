import React from "react";

function AddCity(props) {
  return (
    <div className="add-container">
      <div className="add-button" onClick={props.changeTransparent}>
        <h4 className="add-header">ADD CITY</h4>
        <div className="add-plus"></div>
      </div>
    </div>
  );
}
export default AddCity;
