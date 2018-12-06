import React from 'react';
import styles from './Pill.module.css';

function Pill(props) {
    return (
        <button title={props.title} className={styles.pill}>
            {props.text}
        </button>
    );
}

export default Pill;