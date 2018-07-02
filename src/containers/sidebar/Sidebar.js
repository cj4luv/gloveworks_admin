import React, { Component } from 'react';

import Button from '../../components/button/PureButton';

const logo = '/img/logo.png';

class Sidebar extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={logo} style={styles.logo} alt="logo" />

        <div style={styles.authBox}>
          <p style={styles.idText}>
            Donald
          </p>
          <Button
            onClick={() => alert('logout')}
            style={styles.loginBtn}
          >
            Logout
          </Button>
        </div>

        <div style={styles.categoryBox}>
          <div style={styles.categoryTitle}>
            Orders
          </div>
          <Button
            style={styles.categoryBtn}
            onClick={() => alert('회원 주문')}
          >
            <div style={styles.categoryCircle} />
            <p style={styles.categoryBtnTitle}>
              회원주문
            </p>
          </Button>
          <Button
            style={styles.categoryBtn}
            onClick={() => alert('비회원주문')}
          >
            <div style={styles.categoryCircleAnother} />
            <p style={styles.categoryBtnTitleAnother}>
              비회원주문
            </p>
          </Button>
          <Button
            style={styles.categoryBtn}
            onClick={() => alert('정산관리')}
          >
            <div style={styles.categoryCircleAnother} />
            <p style={styles.categoryBtnTitleAnother}>
              정산관리
            </p>
          </Button>

        </div>

      </div>
    );
  }
}

const styles = {
  container: {
    width: 240,
    height: 'auto',
    minHeight: 2000,
    backgroundColor: '#232432',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 140,
    height: 86,
    marginTop: 21,
  },
  authBox: {
    width: '100%',
    height: 48,
    backgroundColor: '#151524',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
    display: 'flex',
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    padding: '0px 24px 0px 24px',
  },
  idText: {
    fontSize: 14,
    color: '#f0c72c',
  },
  loginBtn: {
    width: 64,
    height: 24,
    MozBorderRadius: 2,
    WebkitBorderRadius: 2,
    borderRadius: 2,
    border: 'solid 1px #fff',
    color: '#fff',
    fontSize: 11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryBox: {

  },
  categoryTitle: {
    width: 240,
    height: 64,
    display: 'flex',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    padding: '0px 24px 0px 24px',
  },
  categoryBtn: {
    width: 240,
    height: 48,
    display: 'flex',
    alignItems: 'center',
  },
  categoryCircle: {
    width: 4,
    height: 4,
    MozBorderRadius: 2,
    WebkitBorderRadius: 2,
    borderRadius: 2,
    backgroundColor: '#ffd80d',
    marginLeft: 24,
  },
  categoryBtnTitle: {
    marginLeft: 16,
    fontSize: 16,
    color: '#ffd80d',
  },
  categoryCircleAnother: {
    width: 4,
    height: 4,
    MozBorderRadius: 2,
    WebkitBorderRadius: 2,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginLeft: 24,
  },
  categoryBtnTitleAnother: {
    marginLeft: 16,
    fontSize: 16,
    color: '#fff',
  },
};

export default Sidebar;
