import React from 'react';
import '../Styles/Arrow-Styles.scss'

function LeftArrow(props) {
  const {darkMode, leftArrow,left} = props;
  return(
    <React.Fragment>
      {
        left === 0 ? 
        <div className={`left-arrow-deactivated ${darkMode ? "left-arrow-deactivated-dark" : ""}`}></div>
        :
        <div className={`left-arrow ${darkMode ? "left-arrow-dark" : ""}`} onClick={leftArrow}></div>
      }
    
    </React.Fragment>
  )
}

export default LeftArrow;