import React from 'react';

function RightArrow(props) {
  const {darkMode, rightArrow, right, cities} = props;
  return(
    <React.Fragment>
      {
        right === cities.length - 1  || cities.length - 1 <= 2
        ?
        <div className={`right-arrow-deactivated ${darkMode ? "right-arrow-deactivated-dark" : ""}`}></div> 
        : 
        <div className={`right-arrow ${darkMode ? "right-arrow-dark" : ""}`} onClick={rightArrow}></div> 


      }
    </React.Fragment>

  )
}

export default RightArrow;