import React from 'react';

function Pill(props) {
    return (
        <button title={props.title} className={props.styles}>
            {props.text}
        </button>
    );
}

export default Pill;