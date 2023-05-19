import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onClick}){
  
  return (
    <div className='Controls'>
      <button onClick={()=> onClick()}>Перейти</button>
    </div>
    
  )
}

Controls.propTypes = {
  onClick: PropTypes.func
};

Controls.defaultProps = {
  onClick: () => {}
}

export default React.memo(Controls);
