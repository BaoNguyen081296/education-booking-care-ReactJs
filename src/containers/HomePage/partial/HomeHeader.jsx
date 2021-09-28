import ImageComponent from 'components/ImageComponent';
import React from 'react';
import './HomeHeader.scss';
import vnFlag from 'assets/images/flag-vn.jpg';
import enFlag from 'assets/images/flag-en.jpg';
export default function HomeHeader() {
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
                <b>Chuyên khoa</b>
              </div>
              <div className='sub-title2'>Tìm bác sĩ theo chuyên khoa</div>
            </div>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>Cơ sở y tế</b>
              </div>
              <div className='sub-title2'>Chọn bệnh viện phòng khám</div>
            </div>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>Bác sĩ</b>
              </div>
              <div className='sub-title2'>Chọn bác sĩ giỏi</div>
            </div>
            <div className='child-content'>
              <div className='sub-title1'>
                <b>Gói khám</b>
              </div>
              <div className='sub-title2'>Gói khám sức khỏe tổng quát</div>
            </div>
          </div>
          {/* End center */}

          {/* Right */}
          <div className='right-content'>
            <div className='support'>
              <i className='fas fa-question-circle'></i>
              <b>Hỗ trợ</b>
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
