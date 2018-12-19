import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from './Pill';
import styles from './PortfolioItem.module.css';

// let onHover = () => {
//     console.log('hovered');
// }

class PortfolioItem extends Component {
    state = {
        hover: false
    }
    
    onHover = () => {
        this.setState({ hover: true });
        
    }
    onLeave = () => {
        this.setState({ hover: false });
    }
    render() {
        console.log(this.state.hover);
        return (
            <div className={styles.Item}>
                <div className={styles.thumbnail}>
                    <div onMouseEnter={this.onHover} onMouseLeave={this.onLeave} className={styles.overlay}>
                        <div className={styles.links}>
                            <a href={this.props.repo} 
                            className={this.state.hover ? styles.top + ' ' + styles.topOnHover : styles.top} 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <span className={styles.circle}>
                            <FontAwesomeIcon icon={['fab', 'github-alt']} />
                            </span> Go to repo</a>
                            <a href={this.props.live} 
                            className={this.state.hover ? styles.bottom + ' ' + styles.bottomOnHover : styles.bottom} 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <span className={styles.circle}>
                            <FontAwesomeIcon icon="eye" />
                            </span> View live</a>
                        </div>
                    </div>
                    <img src={this.props.thumbnail} alt={this.props.title} />
                    
                </div>
                <div className={styles.details}>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                    <div className={styles.skills}>
                    {
                        this.props.skills.map(skill => {
                            return (
                                <Pill styles={styles.pill} key={skill} text={skill} />
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;