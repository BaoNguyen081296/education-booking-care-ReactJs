import React from 'react';
import './HomeSpecialty.scss';
import specialtyImg from 'assets/specialty/specialty-img.jpg';
import ImageComponent from 'components/ImageComponent';
import HomeSlider from '../components/HomeSlider';
export default function HomeSpecialty({ isGray = false }) {
  const arr = [...Array(12)].map((_, i) => ({ name: ++i }));
  return (
    <div className={`_home-specialty ${isGray && 'gray-area'}`}>
      <div className='_home-container page-container'>
        <div className='_home-header'>
          <div className='header-title'>Chuyên khoa phổ biến</div>
          <div className=''>
            <button className='header-btn'>Xem thêm</button>
          </div>
        </div>
        <HomeSlider
          {...{
            items: arr,
            img: <ImageComponent src={specialtyImg} />,
            className: '',
            onClick: () => {},
          }}
        />
      </div>
    </div>
  );
}
