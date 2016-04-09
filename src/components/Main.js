require('normalize.css/normalize.css');
require('styles/main.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Hello there!!!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
