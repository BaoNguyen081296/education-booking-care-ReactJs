import { paths } from 'configs/paths';
import Header from 'containers/Header/Header';
import DoctorManageSchedule from 'containers/System/Doctor/DoctorManageSchedule';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';

export default function DoctorRoutes() {
  const systemMenuPath = useSelector((state) => state.app.systemMenuPath);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Header />}
      <div className='system-container'>
        <div className='system-list'>
          <Switch>
            <Route
              path={paths.DOCTOR.MANAGE_SCHEDULE}
              component={DoctorManageSchedule}
            />

            {/* <Route path={paths.SYSTEM.USER_REDUX} component={UserRedux} /> */}
            <Route component={() => <Redirect to={systemMenuPath} />} />
          </Switch>
        </div>
      </div>
    </>
  );
}
