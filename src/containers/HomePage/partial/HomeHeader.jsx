import ImageComponent from 'components/ImageComponent';
import React from 'react';
import './HomeHeader.scss';
import vnFlag from 'assets/images/flag-vn.jpg';
import enFlag from 'assets/images/flag-en.jpg';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
export default function HomeHeader() {
  const language = useSelector((state) => state.app.language);
  return (
    <div className='_home-header'>
      <div className='_home-header-container'>
        <div className='_home-header-content'>
          {/* left content */}
          <div className='left-content'>
            <i className='fas fa-bars c-pointer'></i>
            <div className='header-logo c-pointer'></div>
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
            <div className='flag'>
              <ImageComponent src={vnFlag} />
              <ImageComponent src={enFlag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
