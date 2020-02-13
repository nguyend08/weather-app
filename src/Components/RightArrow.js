import React from 'react';

function RightArrow(props) {
  const { darkMode, rightArrow } = props;
  return(
    <div className={`right-arrow ${darkMode ? "right-arrow-dark" : ""}`} onClick={rightArrow}>
    </div>
  )
}

export default RightArrow;