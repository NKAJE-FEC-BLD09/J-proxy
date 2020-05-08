import React from 'react';
import {render} from 'react-dom';

import App from './App';

render(
  <App />, document.getElementById('container'),
  React.createElement(<FirstLook />, document.querySelector('#firstLook')),
  React.createElement(<Photos />, document.querySelector('#photos')),
  React.createElement(<Cast />, document.querySelector('#cast')),
  React.createElement(<MoreLikeThis />, document.querySelector('#moreLikeThis'))
);

module.hot.accept();