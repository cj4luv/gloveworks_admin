import React, { Component } from 'react';

import Button from '../../components/button/PureButton';

class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.title}>
          Custom Options
        </p>
        <div style={styles.tabBox}>
          <Button
            style={styles.tabBtn}
            onClick={() => alert('coupons')}
          >
            Coupons
          </Button>
          <Button
            style={styles.focusedTabBtn}
          >
            Banners
            <div style={styles.focusedUnderline} />
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: 176,
    backgroundColor: '#232432',
    position: 'fixed',
  },
  title: {
    marginTop: 48,
    marginLeft: 64,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabBox: {
    marginTop: 54,
    display: 'flex',
  },
  tabBtn: {
    width: 200,
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  focusedTabBtn: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f0c72c',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  focusedUnderline: {
    width: 200,
    height: 4,
    backgroundColor: '#f0c72c',
    position: 'absolute',
    bottom: 0,
  },
};

export default Header;
