import React from 'react';
import styles from './Pill.module.css';

function Pill(props) {
    return (
        <div className={styles.pill}>
            <p>{props.text}</p>
        </div>
    );
}

export default Pill;