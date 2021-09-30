import React from 'react';
import HomeBanner from './partial/HomeBanner';
import HomeHeader from './partial/HomeHeader';
import HomeSpecialty from './partial/HomeSpecialty';
import MedicalFacility from './partial/MedicalFacility';
import './HomePage.scss';
import OutstandingDoctor from './partial/OutstandingDoctor';
import HandBook from './partial/HandBook';
export default function HomePage() {
  return (
    <div className='_home-page'>
      <HomeHeader />
      <HomeBanner />
      <HomeSpecialty isGray={true} />
      <MedicalFacility />
      <OutstandingDoctor isGray={true} />
      <HandBook />
    </div>
  );
}
