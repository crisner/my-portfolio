import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import styles from './Portfolio.module.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Porfolio extends Component {
    state = {
        portfolio: []
    }

    render() {
      return (
        <div className={styles.position}>
          <h3>Porfolio</h3>
          <div className={styles.portfolioContainer}>
          {
              this.state.portfolio.map(item => {
                  return (
                    <PortfolioItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    thumbnail={item.img}
                    repo={item.githubLink}
                    live={item.demoLink}
                    skills={item.skills}
                    />
                  );
              })
          }
          </div>
        </div>
      );
    }
  }
  
export default Porfolio;