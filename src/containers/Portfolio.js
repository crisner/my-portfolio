import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import data from '../data/portfolio.json';
import styles from './Portfolio.module.css';

function importAll(r) {
    let images = {};
    r.keys().map(item => { 
        images[item.replace('./', '')] = r(item); 
        return images;
    });
    return images;
  }
  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Porfolio extends Component {
    state = {
        portfolio: data.portfolio
    }

    render() {
      return (
        <div className={styles.position}>
          <h3 tabIndex="0">Porfolio</h3>
          <div tabIndex="0" className={styles.portfolioContainer}>
          {
              this.state.portfolio.map(item => {
                  return (
                    <PortfolioItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    thumbnailSmall={images[item.img_small]}
                    thumbnailMed={images[item.img_med]}
                    thumbnailLg={images[item.img_lg]}
                    repo={item.repo}
                    live={item.live}
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