import ImageComponent from 'components/ImageComponent';
import HomeHeader from 'containers/HomePage/partial/HomeHeader';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDoctorInforById } from 'services/userService';
import { LANGUAGES } from 'utils';
import './DetailDoctor.scss';
function DetailDoctor() {
  const language = useSelector((state) => state.app.language);
  const params = useParams();
  const [dataDoctor, setDataDoctor] = useState(null);
  const [mappedData, setMappedData] = useState(null);

  const tranformData = (data) => {
    const { contentHTML, contentMarkdown, description } = data.Markdown;
    const { firstName, lastName, positionData } = data;
    let mapData = {
      contentHTML,
      contentMarkdown,
      description,
      nameVi: `${positionData.valueVi} ${lastName} ${firstName}`,
      nameEn: `${positionData.valueEn}${firstName} ${lastName}`,
    };
    setMappedData(mapData);
  };

  useEffect(() => {
    const id = params.id || '';
    getDoctorInforById(id)
      .then((res) => {
        if (res && res.errCode === 0) {
          setDataDoctor(res.data);
        }
      })
      .catch((error) => console.log('error: ', error));
  }, [params]);

  useEffect(() => {
    if (dataDoctor) tranformData(dataDoctor);
  }, [dataDoctor]);

  useEffect(() => {
    const ele = document.getElementsByClassName('schedule-wrapper');
    if (ele.length > 0 && mappedData) {
      ele[0].innerHTML = mappedData.contentHTML;
    }
  }, [mappedData]);

  return (
    <>
      <HomeHeader />
      <section className='_detail-doctor'>
        <div className='_detail-doctor-title'>
          <div className='doctor-title-wrapper page-container'>
            <div className='doctor-title-avata'>
              {dataDoctor && dataDoctor.image && (
                <ImageComponent src={dataDoctor.image} />
              )}
            </div>
            <div className='doctor-title-content'>
              {mappedData && language === LANGUAGES.EN
                ? mappedData?.nameEn
                : mappedData?.nameVi}
              <p>{mappedData && mappedData.description}</p>
            </div>
          </div>
        </div>
        <div className='_detail-doctor-schedule'>
          <div className='schedule-wrapper page-container'></div>
        </div>
        <div className='_detail-doctor-infor'></div>
      </section>
    </>
  );
}

export default DetailDoctor;
