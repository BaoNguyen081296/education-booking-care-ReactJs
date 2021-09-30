import ImageComponent from 'components/ImageComponent';
import React from 'react';
import HomeSlider from '../components/HomeSlider';
import './MedicalFacility.scss';
import imgSrc from 'assets/medical-facility/clinic-k.jpg';

export default function MedicalFacility() {
  const arr = [...Array(12)].map((_, i) => ({
    name: 'Bệnh viện K - Cơ sở Phan Chu Trinh',
  }));
  return (
    <div className='_home-medical-facility'>
      <div className='_home-container page-container'>
        <div className='_home-header'>
          <div className='header-title'>Cơ sở y tế nổi bật</div>
          <div className=''>
            <button className='header-btn'>Tìm kiếm</button>
          </div>
        </div>
        <HomeSlider
          {...{
            items: arr,
            img: <ImageComponent src={imgSrc} />,
            className: '',
            onClick: () => {},
          }}
        />
      </div>
    </div>
  );
}
