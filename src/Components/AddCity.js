import React from "react";

function AddCity(props) {
  return (
    <div className="add-container" onClick={props.changeTransparent}>
      <h4 className="add-header">ADD CITY</h4>
      <div className="add-button"></div>
    </div>
  );
}
export default AddCity;
