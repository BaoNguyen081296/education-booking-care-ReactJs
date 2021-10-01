import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import FlagLanguage from 'components/FlagLanguage';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    const { processLogout, userInfo } = this.props;
    console.log('userInfo: ', userInfo);
    return (
      <div className='header-container'>
        {/* thanh navigator */}
        <div className='header-tabs-container'>
          <Navigator menus={adminMenu} />
        </div>
        <div className='content-right'>
          <span className='welcome'>
            <FormattedMessage id='homeHeader.welcome' />{' '}
            <span>{userInfo?.firstName ? userInfo.firstName + ' !' : ''}</span>
          </span>
          <FlagLanguage />
          <div
            className='btn btn-logout'
            onClick={processLogout}
            title='Log out'
          >
            <i className='fas fa-sign-out-alt'></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
