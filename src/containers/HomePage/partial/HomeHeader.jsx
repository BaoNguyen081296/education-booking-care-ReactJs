import React, { memo } from 'react';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import FlagLanguage from 'components/FlagLanguage';
import { useHistory } from 'react-router';
import { paths } from 'configs/paths';
function HomeHeader() {
  const history = useHistory();
  return (
    <div className='_home-page-header'>
      <div className='_home-page-header-container'>
        <div className='_home-page-header-content'>
          {/* left content */}
          <div className='left-content'>
            <i className='fas fa-bars c-pointer'></i>
            <div
              className='header-logo c-pointer'
              onClick={() => history.push(paths.HOME_PAGE)}
            ></div>
          </div>
          {/* End left content */}

          {/* Center */}
          <div className='center-content'>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>
                  <FormattedMessage id='homeHeader.speciality' />
                </b>
              </div>
              <div className='sub-title2'>
                <FormattedMessage id='homeHeader.searchDoctor' />
              </div>
            </div>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>
                  <FormattedMessage id='homeHeader.healthFacility' />
                </b>
              </div>
              <div className='sub-title2'>
                <FormattedMessage id='homeHeader.selectRoom' />
              </div>
            </div>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>
                  <FormattedMessage id='homeHeader.doctor' />
                </b>
              </div>
              <div className='sub-title2'>
                <FormattedMessage id='homeHeader.selectDoctor' />
              </div>
            </div>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>
                  <FormattedMessage id='homeHeader.fee' />
                </b>
              </div>
              <div className='sub-title2'>
                <FormattedMessage id='homeHeader.checkHealth' />
              </div>
            </div>
          </div>
          {/* End center */}

          {/* Right */}
          <div className='right-content'>
            <div className='support'>
              <i className='fas fa-question-circle'></i>
              <b>
                <FormattedMessage id='homeHeader.support' />
              </b>
            </div>
            <FlagLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(HomeHeader);
