import React, { Component } from 'react';

const logo = '/img/logo.png';

class Sidebar extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={log} style={styles.logo} alt="log" />
      </div>
    );
  }
}

const styles = {
  container: {
    width: 240,
    height: '100%',
    backgroundColor: '#232432',
  },
  logo: {
    width: 140,
    height: 86,
  },
};

export default Sidebar;
