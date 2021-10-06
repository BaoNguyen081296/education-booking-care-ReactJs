import UserManage from 'containers/System/UserManage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { paths } from 'configs/paths';
import UserRedux from 'containers/System/Admin/UserRedux';
import Header from 'containers/Header/Header.jsx';
import './System.scss';
class System extends Component {
  render() {
    const { systemMenuPath } = this.props;
    return (
      <>
        <Header />
        <div className='system-container'>
          <div className='system-list'>
            <Switch>
              <Route path={paths.SYSTEM.USER_MANAGE} component={UserManage} />
              <Route path={paths.SYSTEM.USER_REDUX} component={UserRedux} />
              <Route component={() => <Redirect to={systemMenuPath} />} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
