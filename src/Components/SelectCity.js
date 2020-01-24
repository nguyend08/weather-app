import React from "react";

function SelectCity(props) {
  return (
    <div className="select-city-container">
      <form className="select-city-input" onSubmit={props.handleInputSubmit}>
        <label>
          Please Insert A City:
          <input
            type="text"
            value={props.currentCity}
            onChange={props.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div onClick={props.changeTransparent}>X</div>
    </div>
  );
}

export default SelectCity;
