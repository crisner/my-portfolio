import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageAnimation = Page => {
  return props =>
    <CSSTransition
    in={true}
    appear={true}
    timeout={600}
    classNames="fade">
        <Page {...props} />
    </CSSTransition>
};

export default PageAnimation;