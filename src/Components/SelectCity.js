import React from "react";
import '../Styles/SelectCity-Styles.scss';

function SelectCity(props) {
  const {darkMode} = props;
  return (
    <div className="select-city-container">
      <div className={`select-city-exit ${darkMode ? "select-city-exit-dark" : ""}`} onClick={props.changeTransparent}>X</div>
      <form className="select-city-form" onSubmit={props.handleInputSubmit}>
          <input
            className="select-city-input"
            type="text"
            value={props.currentCity}
            onChange={props.handleInputChange}
            placeholder="Select A City"
          />
        <input className={`select-city-submit ${darkMode ? "select-city-submit-dark" : ""}`} type="submit" value="Add City" />
      </form>
    </div>
  );
}

export default SelectCity;
