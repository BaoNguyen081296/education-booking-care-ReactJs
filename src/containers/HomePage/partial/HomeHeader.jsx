import ImageComponent from 'components/ImageComponent';
import React, { useCallback } from 'react';
import './HomeHeader.scss';
import vnFlag from 'assets/images/flag-vn.jpg';
import enFlag from 'assets/images/flag-en.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from 'utils';
import { changeLanguageApp } from 'store/actions';
export default function HomeHeader() {
  const language = useSelector((state) => state.app.language);
  const dispatch = useDispatch();
  const handleChangeLanguage = useCallback(
    (e) => {
      dispatch(changeLanguageApp(e));
    },
    [dispatch]
  );
  return (
    <div className='_home-page-header'>
      <div className='_home-page-header-container'>
        <div className='_home-page-header-content'>
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
              <span
                className={`flag-icon ${
                  language === LANGUAGES.VI ? 'active' : ''
                }`}
                onClick={() => handleChangeLanguage(LANGUAGES.VI)}
              >
                <ImageComponent src={vnFlag} />
              </span>
              <span
                className={`flag-icon ${
                  language === LANGUAGES.EN ? 'active' : ''
                }`}
                onClick={() => handleChangeLanguage(LANGUAGES.EN)}
              >
                <ImageComponent src={enFlag} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
