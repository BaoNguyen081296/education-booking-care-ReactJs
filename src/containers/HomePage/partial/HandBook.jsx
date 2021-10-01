import React from 'react';
import HomeSlider from '../components/HomeSlider';
import imgSrc from 'assets/handbook/handbook.jpg';

import './HandBook.scss';
export default function HandBook({ isGray = false }) {
  const arr = [...Array(12)].map((_, i) => ({
    name: 'Khám bệnh online thời kỳ COVID-19: Hướng dẫn đăng ký và Lưu ý quan trọng',
  }));
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className={`_hand-book ${isGray && 'gray-area'}`}>
      <div className='_home-container page-container'>
        <div className='_home-header'>
          <div className='header-title'>Cẩm nang</div>
          <div className=''>
            <button className='header-btn'>Tất cả bài viết</button>
          </div>
        </div>
        <HomeSlider
          {...{
            settings,
            items: arr,
            img: (
              <div
                className='slider-img'
                style={{ backgroundImage: `url(${imgSrc})` }}
              >
                {/* <ImageComponent src={imgSrc} /> */}
              </div>
            ),
            className: '_hand-book-slider',
            onClick: (e) => {},
          }}
        />
      </div>
    </div>
  );
}
