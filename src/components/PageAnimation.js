import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageAnimation = Page => {
  return props =>
    // <div className="page">
    <CSSTransition
    in={true}
    appear={true}
    timeout={600}
    classNames="fade">
        <Page {...props} />
    </CSSTransition>
    {/* </div>; */}
};

export default PageAnimation;