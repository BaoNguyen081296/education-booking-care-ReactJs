import React from 'react';
import './HomeHeader.scss';
export default function HomeHeader() {
  return (
    <div className='_home-header'>
      <div className='_home-header-container'>
        <div className='_home-header-content'>
          {/* left content */}
          <div className='left-content'>
            <i class='fas fa-bars c-pointer'></i>
            <div className='header-logo c-pointer'></div>
          </div>
          {/* End left content */}

          {/* Center */}
          <div className='center-content'>
            <div className='child-content'>
              <div>
                <b>Chuyên khoa</b>
              </div>
              <div className='sub-title'>Tìm bác sĩ theo chuyên khoa</div>
            </div>
            <div className='child-content'>
              <div>
                <b>Cơ sở y tế</b>
              </div>
              <div className='sub-title'>Chọn bệnh viện phòng khám</div>
            </div>
            <div className='child-content'>
              <div>
                <b>Bác sĩ</b>
              </div>
              <div className='sub-title'>Chọn bác sĩ giỏi</div>
            </div>
            <div className='child-content'>
              <div>
                <b>Gói khám</b>
              </div>
              <div className='sub-title'>Gói khám sức khỏe tổng quát</div>
            </div>
          </div>
          {/* End center */}

          {/* Right */}
          <div className='right-content'>
            <div>
              <i class='fas fa-question-circle'></i>
              <b>Hỗ trợ</b>
            </div>
            <div className='flag'>VN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
