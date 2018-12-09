import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pill from './Pill';

function PortfolioItem(props) {
    return (
        <div>
            <div>
                <img src={props.thumbnail} width="100px" alt={props.title} />
                <a href={props.repo}><FontAwesomeIcon icon={['fab', 'github-alt']} /> Go to github repo</a>
                <a href={props.live}><FontAwesomeIcon icon={['fab', 'github-alt']} /> View live</a>
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