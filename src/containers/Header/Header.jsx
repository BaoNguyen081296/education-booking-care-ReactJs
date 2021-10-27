import React, { useEffect, useState } from 'react';
import * as actions from 'store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import FlagLanguage from 'components/FlagLanguage';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { USER_ROLE } from 'utils';
export default function Header() {
  const [menuApp, setMenuApp] = useState([]);
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    let menu = [];
    if (userInfo && !_.isEmpty(userInfo)) {
      const role = userInfo.roleId;
      switch (role) {
        case USER_ROLE.ADMIN:
          menu = adminMenu;
          break;
        case USER_ROLE.DOCTOR:
          menu = doctorMenu;
          break;
        default:
          break;
      }
      setMenuApp(menu);
    }
  }, [userInfo]);

  return (
    <div className='header-container'>
      {/* thanh navigator */}
      <div className='header-tabs-container'>
        <Navigator menus={menuApp} />
      </div>
      <div className='content-right'>
        <span className='welcome'>
          <FormattedMessage id='homeHeader.welcome' />{' '}
          <span>{userInfo?.firstName ? userInfo.firstName + ' !' : ''}</span>
        </span>
        <FlagLanguage />
        <div
          className='btn btn-logout'
          onClick={() => dispatch(actions.processLogout())}
          title='Log out'
        >
          <i className='fas fa-sign-out-alt'></i>
        </div>
      </div>
    </div>
  );
}
