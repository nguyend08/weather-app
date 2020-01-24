import React from "react";

function AddCity(props) {
  return (
    <div className="add-container" onClick={props.changeTransparent}>
      <h4 className="add-header">ADD CITY</h4>
      <div className="add-button"></div>
      <img
        className="add-button-picture"
        alt="city buildings"
        src="http://www.freepngclipart.com/download/cartoon/78468-information-city-vinnytsia-cartoon-stryzhavka-download-hd-png.png"
      ></img>
    </div>
  );
}

export default AddCity;
