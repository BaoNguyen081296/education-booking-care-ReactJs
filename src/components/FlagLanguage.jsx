import React, { useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LANGUAGES } from 'utils';
import ImageComponent from './ImageComponent';
import vnFlag from 'assets/images/flag-vn.jpg';
import enFlag from 'assets/images/flag-en.jpg';
import { changeLanguageApp } from 'store/actions';
import './FlagLanguage.scss';
function FlagLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);

  const handleChangeLanguage = useCallback(
    (e) => {
      dispatch(changeLanguageApp(e));
    },
    [dispatch]
  );
  return (
    <div className='flag'>
      <span
        className={`flag-icon ${language === LANGUAGES.VI ? 'active' : ''}`}
        onClick={() => handleChangeLanguage(LANGUAGES.VI)}
      >
        <ImageComponent src={vnFlag} />
      </span>
      <span
        className={`flag-icon ${language === LANGUAGES.EN ? 'active' : ''}`}
        onClick={() => handleChangeLanguage(LANGUAGES.EN)}
      >
        <ImageComponent src={enFlag} />
      </span>
    </div>
  );
}
export default memo(FlagLanguage);
