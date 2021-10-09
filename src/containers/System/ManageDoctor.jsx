import React, { useState, useEffect, useCallback } from 'react';
import MarkdownComponent from 'containers/HomePage/components/MarkdownComponent';
import { Button, Form } from 'react-bootstrap';
import './ManageDoctor.scss';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
function ManageDoctor() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [markdownData, setMarkdownData] = useState(null);
  const [doctorInfo, setDoctorInfo] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = [
    { value: 'none', label: 'None' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = (e) => {
    setSelectedDoctor(e);
  };

  const handleChangeMarkdown = useCallback((e) => {
    setMarkdownData(e);
  }, []);

  const handleChangeInfo = useCallback((e) => {
    setDoctorInfo(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('markdownData: ', markdownData);
    console.log('selectedDoctor: ', selectedDoctor);
    console.log('doctorInfo: ', doctorInfo);
  }, [doctorInfo, markdownData, selectedDoctor]);

  useEffect(() => {
    if (!selectedDoctor) setSelectedDoctor(options[0]);
  }, [options, selectedDoctor]);

  useEffect(() => {
    console.log('markdownData: ', markdownData);
  }, [markdownData]);

  useEffect(() => {
    console.log('doctorInfo: ', doctorInfo);
  }, [doctorInfo]);

  return (
    <div className='_manage-doctor'>
      <div className='_manage-doctor-wrapper page-container'>
        <div className='_manage-doctor-content'>
          <div className='title'>
            <h3>
              <FormattedMessage id='menu.admin.manageDoctor' />
            </h3>
          </div>
        </div>
        <div className='info-area'>
          <div className='select-doctor'>
            <p>Chọn bác sĩ</p>
            <Select
              autoFocus
              value={selectedDoctor}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className='text-area'>
            <p>Thông tin giới thiệu:</p>
            <Form.Control
              as='textarea'
              placeholder='Thông tin giới thiệu'
              style={{ height: '100px' }}
              onChange={handleChangeInfo}
            />
          </div>
        </div>
        <div className='_manage-doctor-markdown'>
          <MarkdownComponent onChange={handleChangeMarkdown} />
        </div>
        <div className='_manage-doctor-footer'>
          <Button onClick={handleSubmit}>
            {' '}
            <FormattedMessage id='button.save' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ManageDoctor;
