import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from '../components/Pill';
import styles from './PortfolioItem.module.css';

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
    onClick = () => {
        this.setState({ hover: !this.state.hover });
    }
    
    render() {
        return (
            <div tabIndex="0" className={styles.Item}>
                <div className={styles.thumbnail}>
                    <div onMouseEnter={this.onHover} onMouseLeave={this.onLeave} className={this.state.hover ? styles.overlay + ' ' + styles.overlayOnHover : styles.overlay}>
                        <div className={styles.links}>
                            <a tabIndex="0" href={this.props.repo} 
                            className={this.state.hover ? styles.top + ' ' + styles.topOnHover : styles.top}
                            rel="noopener noreferrer" 
                            target="_blank">
                            <span className={styles.circle}>
                            <FontAwesomeIcon icon={['fab', 'github-alt']} />
                            </span> Go to repo</a>
                            <a tabIndex="0" href={this.props.live} 
                            className={this.state.hover ? styles.bottom + ' ' + styles.bottomOnHover : styles.bottom} 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <span className={styles.circle}>
                            <FontAwesomeIcon icon="eye" />
                            </span> View live</a>
                        </div>
                    </div>
                    <img
                    tabIndex="0"
                    srcSet={`${this.props.thumbnailSmall} 200w,
                    ${this.props.thumbnailMed} 400w,
                    ${this.props.thumbnailLg} 600w `}
                    sizes="(max-width: 480px) 200px,
                            (max-width: 1024px) 400px,
                            (min-width: 1025px) 600px"
                    src={this.props.thumbnailSmall} alt={this.props.title} />
                    <FontAwesomeIcon 
                    tabIndex="0"
                    className={styles.mouseOver} 
                    onClick={this.onClick}
                    title="Roll mouse over image" 
                    icon="link" />
                </div>
                <div tabIndex="0" className={styles.details}>
                    <h4 tabIndex="0">{this.props.title}</h4>
                    <p tabIndex="0">{this.props.description}</p>
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