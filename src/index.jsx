import React from 'react';
import {render} from 'react-dom';

render(
  React.createElement(<FirstLook />, document.querySelector('#firstLook')),
  React.createElement(<Photos />, document.querySelector('#photos')),
  React.createElement(<Cast />, document.querySelector('#cast')),
  React.createElement(<MoreLikeThis />, document.querySelector('#moreLikeThis')),
  React.createElement(<DidYouKnow />, document.querySelector('#didYouKnow'))
);

module.hot.accept();