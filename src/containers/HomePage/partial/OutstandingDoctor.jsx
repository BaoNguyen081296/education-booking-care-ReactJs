import ImageComponent from 'components/ImageComponent';
import React from 'react';
import HomeSlider from '../components/HomeSlider';
import imgSrc from 'assets/images/img_avatar.png';

import './OutstandingDoctor.scss';
export default function OutstandingDoctor({ isGray = false }) {
  const arr = [...Array(12)].map((_, i) => ({
    name: 'PGS, TS, Giảng viên cao cấp Trần Hữu Bình',
    specialist: 'Ngoại thần kinh',
  }));
  return (
    <div className={`_outstanding-doctor ${isGray && 'gray-area'}`}>
      <div className='_home-container page-container'>
        <div className='_home-header'>
          <div className='header-title'>Bác sĩ nổi bật tuần qua</div>
          <div className=''>
            <button className='header-btn'>Tìm kiếm</button>
          </div>
        </div>
        <HomeSlider
          {...{
            items: arr,
            img: (
              <div className='slider-img'>
                <ImageComponent src={imgSrc} />
              </div>
            ),
            className: '_outstanding-doctor-slider',
            onClick: (e) => {},
          }}
        />
      </div>
    </div>
  );
}
