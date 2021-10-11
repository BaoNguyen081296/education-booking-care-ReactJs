import React, { useState, useEffect, useCallback } from 'react';
import MarkdownComponent from 'containers/HomePage/components/MarkdownComponent';
import { Button, Form } from 'react-bootstrap';
import './ManageDoctor.scss';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { LANGUAGES } from 'utils';
import FormatMessageComponent from 'components/FormatMessageComponent';
import formatMessageInt, { showToast } from 'utils/utils';
import { getDoctorList, saveDetailDoctor } from 'services/userService';

function ManageDoctor() {
  const language = useSelector((state) => state.app.language);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [markdownData, setMarkdownData] = useState(null);
  const [description, setDescription] = useState(null);
  const [doctorOptions, setDoctorOptions] = useState(null);

  const handleChange = (e) => {
    setSelectedDoctor(e);
  };

  const handleChangeMarkdown = useCallback((e) => {
    setMarkdownData(e);
  }, []);

  const handleChangeInfo = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    console.log('markdownData: ', markdownData);
    console.log('selectedDoctor: ', selectedDoctor);
    console.log('doctorInfo: ', description);
    if (!selectedDoctor) {
      showToast(<FormatMessageComponent id='manageDoctor.msgSelectDoctor' />);
      return;
    }
    try {
      // const res = await saveDetailDoctor({
      //   contentHTML: markdownData.html,
      //   contentMarkdown: markdownData.text,
      //   description,
      //   doctorId: selectedDoctor.id,
      // });
      // if (res && res.errCode === 0) {
      //   showToast(
      //     <FormatMessageComponent id='manageDoctor.saveSuccess' />,
      //     'success'
      //   );
      // } else {
      //   showToast(
      //     <FormatMessageComponent id='manageDoctor.saveSuccess' />,
      //     'success'
      //   );
      // }
    } catch (error) {
      console.log('error: ', error);
    }
  }, [description, markdownData, selectedDoctor]);

  const transformDataSelect = useCallback(
    (data) => {
      let dataTransform = [];
      if (data && data.length > 0) {
        data.forEach((item, _) => {
          let labelVi = `${item.lastName} ${item.firstName}`;
          let labelEn = `${item.firstName} ${item.lastName}`;
          dataTransform.push({
            ...item,
            labelVi,
            labelEn,
            value: item.id,
            label: language === LANGUAGES.VI ? labelVi : labelEn,
          });
        });
      }
      return dataTransform;
    },
    [language]
  );

  useEffect(() => {
    (async () => {
      if (!doctorOptions) {
        const res = await getDoctorList();
        if (res) setDoctorOptions(transformDataSelect(res.data));
      }
    })();
  }, [transformDataSelect, doctorOptions]);

  useEffect(() => {
    if (doctorOptions && doctorOptions.length > 0)
      setDoctorOptions(transformDataSelect(doctorOptions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, transformDataSelect]);

  return (
    <div className='_manage-doctor'>
      <div className='_manage-doctor-wrapper page-container'>
        <div className='_manage-doctor-content'>
          <div className='title'>
            <h3>
              <FormatMessageComponent id='menu.admin.manageDoctor' />
            </h3>
          </div>
        </div>
        <div className='info-area'>
          <div className='select-doctor'>
            <p>
              <FormatMessageComponent id='manageDoctor.selectDoctor' />
            </p>
            {doctorOptions && doctorOptions.length > 0 && (
              <Select
                autoFocus
                value={selectedDoctor}
                onChange={handleChange}
                options={doctorOptions}
                defaultValue={null}
                placeholder={
                  <FormatMessageComponent id='manageDoctor.selectDoctor' />
                }
              />
            )}
          </div>
          <div className='text-area'>
            <p>
              <FormatMessageComponent id='manageDoctor.description' />
            </p>
            <Form.Control
              as='textarea'
              placeholder={formatMessageInt('manageDoctor.description')}
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
            <FormatMessageComponent id='button.save' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ManageDoctor;
