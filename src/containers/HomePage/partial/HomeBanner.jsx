import React from 'react';
import './HomeBanner.scss';
// import background from '../../../assets/icons/icon-banner/icon-banner-1.png';
export default function HomeBanner() {
  const bottomContent = [
    {
      content1: 'Khám',
      content2: 'Chuyên khoa',
    },
    {
      content1: 'Khám',
      content2: 'từ xa',
    },
    {
      content1: 'Khám',
      content2: 'tổng quát',
    },
    {
      content1: 'Xét nghiệm',
      content2: 'y học',
    },
    {
      content1: 'Sức khỏe',
      content2: 'tinh thần',
    },
    {
      content1: 'Khám',
      content2: 'nha khoa',
    },
  ];
  return (
    <div className='_home-banner'>
      <div className='_home-banner-bg'>
        <div className='_home-banner-wrapper'>
          {/* Top content */}
          <div className='_home-banner-top'>
            <div className='top-content'>
              <div className='top-content-title'>
                <div className='title-1'>NỀN TẢNG Y TẾ</div>
                <div className='title-2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
              </div>
              <div className='top-content-search'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
              </div>
            </div>
            <div className='top-content-app'></div>
          </div>
          {/* End top content */}
          {/* Bottom content */}
          <div className='_home-banner-bottom'>
            <ul>
              {bottomContent.map((item, idx) => {
                const backgound =
                  require(`../../../assets/icons/icon-banner/icon-banner-${
                    idx + 1
                  }.png`).default;
                return (
                  <li key={idx}>
                    <div
                      className='icon'
                      style={{
                        backgroundImage: `url(${backgound})`,
                      }}
                    ></div>
                    <div className='content'>
                      {item.content1}
                      <br /> {item.content2}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
