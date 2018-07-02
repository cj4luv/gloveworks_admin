import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <p>
Custom Options
        </p>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: 176,
    backgroundColor: '#232432',
  },
};

export default Header;
