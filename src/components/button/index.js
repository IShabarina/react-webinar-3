import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Button({onClick, text}) {
    return (
        <button className='Button' onClick={onClick}>
            {text}
        </button>
    )
}

export default React.memo(Button);