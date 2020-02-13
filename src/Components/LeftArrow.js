import React from 'react';
import '../Styles/Arrow-Styles.scss'

function LeftArrow(props) {
  const { darkMode, leftArrow } = props;
  return(
    <div className={`left-arrow ${darkMode ? "left-arrow-dark" : ""}`} onClick={leftArrow}>
    </div>
  )
}

export default LeftArrow;