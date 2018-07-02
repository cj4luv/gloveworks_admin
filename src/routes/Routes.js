import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from '../containers/header/Header';
import Sidebar from '../containers/sidebar/Sidebar';

import Home from '../pages/home/Home';

class Routes extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Sidebar />

        <div style={styles.body}>
          <Header />

          <Route
            exact
            path="/"
            component={Home}
          />
        </div>

      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDiretion: 'row',
  },
  body: {
    width: '100%',
    height: '100%',
  },
};

export default withRouter(Routes);
