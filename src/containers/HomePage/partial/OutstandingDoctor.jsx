import ImageComponent from 'components/ImageComponent';
import React, { useEffect, useState } from 'react';
import HomeSlider from '../components/HomeSlider';
import imgSrc from 'assets/images/img_avatar.png';

import './OutstandingDoctor.scss';
import { getTopDoctorHome } from 'services/userService';
import { useSelector } from 'react-redux';
import { LANGUAGES } from 'utils';
import { deCodeBase64 } from 'utils/utils';
import { FormattedMessage } from 'react-intl';
const PER_PAGE = 10;
export default function OutstandingDoctor({ isGray = false }) {
  const language = useSelector((state) => state.app.language);
  const [doctors, setDoctors] = useState(null);
  const [dataSlider, setDataSlider] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getTopDoctorHome(PER_PAGE);
      if (res && res.errCode === 0) {
        setDoctors(res.data);
      }
    })();
  }, []);

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      const data = doctors.map((item, idx) => {
        const { lastName, firstName, image } = item;
        const { valueEn, valueVi } = item.positionData;
        const img = (
          <div className='slider-img'>
            {' '}
            <ImageComponent src={deCodeBase64(image)} />
          </div>
        );
        let name = '';
        if (language === LANGUAGES.VI) {
          name = `${valueVi} ${lastName} ${firstName}`;
        } else {
          name = `${valueEn} ${firstName} ${lastName}`.trim();
        }
        return { name, img, specialist: 'Ngoại thần kinh' };
      });
      setDataSlider(data);
    }
  }, [doctors, language]);

  return (
    <div className={`_outstanding-doctor ${isGray && 'gray-area'}`}>
      <div className='_home-container page-container'>
        <div className='_home-header'>
          <div className='header-title'>
            <FormattedMessage id='homePage.outStandingDoctor.title' />
          </div>
          <div className=''>
            <button className='header-btn'>
              <FormattedMessage id='button.more' />
            </button>
          </div>
        </div>
        {dataSlider && dataSlider.length > 0 && (
          <HomeSlider
            {...{
              items: dataSlider,
              img: (
                <div className='slider-img'>
                  <ImageComponent src={imgSrc} />
                </div>
              ),
              className: '_outstanding-doctor-slider',
              onClick: (e) => {},
            }}
          />
        )}
      </div>
    </div>
  );
}
