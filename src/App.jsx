import React, { Component } from 'react';

import FirstLook from '../components/A-firstLook-service/src/App.jsx';
import Photos from '../components/J-Photos-service/client/src/components/App.jsx';
import Cast from '../components/N-Cast-Service/client/component/app.jsx';
import MoreLikeThis from '../components/k-morelikethis-service/src/App.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <FirstLook />
        <Photos />
        <Cast />
        <MoreLikeThis />
      </div>
    );
  }
}

export default App;