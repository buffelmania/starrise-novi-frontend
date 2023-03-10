import React from 'react';
import './ButtonStyles.css';

function Button(props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default Button;