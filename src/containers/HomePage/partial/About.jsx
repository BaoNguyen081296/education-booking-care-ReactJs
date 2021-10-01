import React from 'react';
import './About.scss';
import ImageComponent from 'components/ImageComponent';
import srcImg from 'assets/images/about-img.jpg';
export default function About({ isGray = false }) {
  return (
    <div className={`_about ${isGray && 'gray-area'}`}>
      <div className='page-container'>
        <div className='_about-content'>
          <div className='content content-left'>
            <div className='content-title'>Truyền thông nói về BookingCare</div>
            <div className='content-body'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/FyDQljKtWnI'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen='allowfullscreen'
              ></iframe>
            </div>
          </div>
          <div className='content content-right'>
            <ImageComponent src={srcImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
