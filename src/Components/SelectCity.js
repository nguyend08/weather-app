import React from "react";
import "../Styles/SelectCity-Styles.scss";

function SelectCity(props) {
  const {
    darkMode,
    handleInputSubmit,
    changeTransparent,
    currentCity,
    handleInputChange
  } = props;
  return (
    <div className="select-city-container">
      <div
        className={`select-city-exit ${
          darkMode ? "select-city-exit-dark" : ""
        }`}
        onClick={changeTransparent}
      >
        X
      </div>
      <form className="select-city-form" onSubmit={handleInputSubmit}>
        <input
          className="select-city-input"
          type="text"
          value={currentCity}
          onChange={handleInputChange}
          placeholder="Select A City"
        />
        <input
          className={`select-city-submit ${
            darkMode ? "select-city-submit-dark" : ""
          }`}
          type="submit"
          value="Add City"
        />
      </form>
    </div>
  );
}

export default SelectCity;
