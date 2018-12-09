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
        portfolio: [
            {
                title: 'TODO List',
                description: 'A simple todo list application made with plainJS.',
                img: images['todo-list.png'],
                githubLink: '#',
                demoLink: '#',
                skills: ['HTML', 'CSS', 'PureJS']
            },
            {
                title: 'Pixel Art Maker',
                description: 'A web application to play with creating pixel art.',
                img: images['pixel-art-maker.png'],
                githubLink: '#',
                demoLink: '#',
                skills: ['HTML', 'CSS', 'jQuery']
            },
            {
                title: 'RGB Color Game',
                description: 'A color guessing game from a displayed RGB value.',
                img: images['color-game.png'],
                githubLink: '#',
                demoLink: '#',
                skills: ['HTML', 'CSS', 'PureJS']
            }
        ]
    }

    render() {
      return (
        <div className={styles.position}>
          <h3>Porfolio</h3>
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
      );
    }
  }
  
export default Porfolio;