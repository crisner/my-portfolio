import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from './Pill';
import styles from './PortfolioItem.module.css';

function PortfolioItem(props) {
    return (
        <div className={styles.Item}>
            <div className={styles.thumbnail}>
                <div className={styles.overlay}>
                    <div className={styles.links}>
                        <a href={props.repo}><span className={styles.circle}><FontAwesomeIcon icon={['fab', 'github-alt']} /></span> Go to github repo</a>
                        <a href={props.live}><span className={styles.circle}><FontAwesomeIcon icon={['fab', 'github-alt']} /></span> View live</a>
                    </div>
                </div>
                <img src={props.thumbnail} alt={props.title} />
                
            </div>
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                {
                    props.skills.map(skill => {
                        return (
                            <Pill key={skill} text={skill} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PortfolioItem;