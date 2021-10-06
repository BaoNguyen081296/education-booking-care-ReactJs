import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { paths } from 'configs/paths';

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
    let linkToRedirect = isLoggedIn
      ? paths.SYSTEM.USER_MANAGE
      : paths.HOME_PAGE;
    return <Redirect to={linkToRedirect} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
