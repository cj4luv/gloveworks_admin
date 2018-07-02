import React, { PureComponent } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

class App extends PureComponent {
  render() {
    return (
      /**
       * @param {Boolean} forceRefresh BrowserRouter props
       */
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
