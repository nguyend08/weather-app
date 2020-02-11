import React from "react";
import '../Styles/SelectCity-Styles.scss';

function SelectCity(props) {
  return (
    <div className="select-city-container">
      <div className="select-city-exit" onClick={props.changeTransparent}>X</div>
      <form className="select-city-form" onSubmit={props.handleInputSubmit}>
          <input
            className="select-city-input"
            type="text"
            value={props.currentCity}
            onChange={props.handleInputChange}
            placeholder="Select A City"
          />
        <input className="select-city-submit" type="submit" value="Add City" />
      </form>
    </div>
  );
}

export default SelectCity;
