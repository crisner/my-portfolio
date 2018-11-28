import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';

class Porfolio extends Component {
    state = {
        portfolio: [
            {
                title: 'TODO List',
                description: 'A simple todo list application made with plainJS.',
                img: '..\images\crisner.github.io_todo-list_.png',
                githubLink: '#',
                demoLink: '#',
                skills: ['HTML', 'CSS', 'PureJS']
            },
            {
                title: 'Pixel Art Maker',
                description: 'A web application to play with creating pixel art.',
                img: 'src\images\crisner.github.io_pixel-art-maker_.png',
                githubLink: '#',
                demoLink: '#',
                skills: ['HTML', 'CSS', 'jQuery']
            },
            {
                title: 'RGB Color Game',
                description: 'A color guessing game from a displayed RGB value.',
                img: 'src\images\crisner.github.io_color-game_.png',
                githubLink: '#',
                demoLink: '#',
                skills: ['HTML', 'CSS', 'PureJS']
            }
        ]
    }

    render() {
      return (
        <div>
          <h3>Porfolio</h3>
          {
              this.state.portfolio.map(item => {
                  return (
                    <PortfolioItem
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