import React from 'react';
import styles from './Pill.module.css';

function Pill(props) {
    return (
        <button className={styles.pill}>
            {props.text}
        </button>
    );
}

export default Pill;