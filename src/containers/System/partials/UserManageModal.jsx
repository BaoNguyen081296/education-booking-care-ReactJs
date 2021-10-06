import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './UserManageModal.scss';
import { Form, Button, Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ImageComponent from 'components/ImageComponent';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'store/actions';
import { LANGUAGES } from 'utils';
import { toBase64 } from 'utils/utils';

// import useDebounce from 'hooks/useDebounce';

const UserManageModal = ({ show = false, onSubmit, userInfo, closeModal }) => {
  const language = useSelector((state) => state.app.language);
  const genders = useSelector((state) => state.admin.genders);
  const roles = useSelector((state) => state.admin.roles);
  const positions = useSelector((state) => state.admin.positions);
  const dispatch = useDispatch();
  const [errMSG, setErrMSG] = useState(null);
  const initValue = useMemo(() => {
    if (genders.length > 0 && roles.length > 0 && positions.length > 0)
      return {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        gender: genders[0].keyMap,
        roleId: roles[0].keyMap,
        positionId: positions[0].keyMap,
        image: '',
      };
    return {};
  }, [genders, positions, roles]);
  const [objData, setObjData] = useState(initValue);
  const [previewImgUrl, setPreviewImgUrl] = useState('');
  const [avata, setAvata] = useState('');

  const checkValidData = useCallback(
    (data) => {
      const keys = [
        { key: 'email', msg: 'Email' },
        ...(userInfo ? [] : [{ key: 'password', msg: 'Password' }]),
        { key: 'firstName', msg: 'First name' },
        { key: 'lastName', msg: 'Last name' },
        { key: 'address', msg: 'Address' },
        { key: 'phoneNumber', msg: 'Phone number' },
        { key: 'gender', msg: 'gender' },
        { key: 'roleId', msg: 'roleId' },
        { key: 'positionId', msg: 'positionId' },
      ];
      for (let i = 0; i < keys.length; i++) {
        const { key, msg } = keys[i];
        if (!data[key]) {
          setErrMSG(msg + ' is required!');
          return false;
        }
      }
      setErrMSG('');
      return true;
    },
    [userInfo]
  );

  const handleUpdateData = useCallback(
    (e) => {
      const { id, value } = e.target;
      setObjData({ ...objData, [id]: value });
    },
    [objData]
  );

  const handleCloseModal = useCallback(() => {
    closeModal();
    setTimeout(() => {
      setErrMSG(null);
      setObjData(initValue);
    }, 300);
  }, [closeModal, initValue]);

  const handleSubmit = useCallback(() => {
    const isValid = checkValidData(objData);
    if (isValid) onSubmit({ ...objData, image: avata });
  }, [avata, checkValidData, objData, onSubmit]);

  useEffect(() => {
    if (userInfo) {
      let user = { ...userInfo };
      if (genders.length > 0 && roles.length > 0 && positions.length > 0) {
        if (!user.positionId) user.positionId = positions[0].keyMap;
        if (!user.roleId) user.roleId = roles[0].keyMap;
        if (!user.gender) user.gender = genders[0].keyMap;
      }
      setObjData(user);
      if (userInfo.image) {
        const imageBase64 = new Buffer(userInfo.image, 'base64').toString(
          'binary'
        );
        setPreviewImgUrl(imageBase64);
        setAvata(imageBase64);
      }
    } else {
      setObjData(initValue);
      setPreviewImgUrl('');
      setAvata('');
    }
  }, [show, userInfo, language, genders, roles, positions, initValue]);

  useEffect(() => {
    dispatch(actions.getAllCodeStart(['gender', 'role', 'position']));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReviewImg = async (e) => {
    const file = e.target.files[0];
    if (file && ['image/jpeg', 'image/png'].includes(file.type)) {
      const previewImgUrl = URL.createObjectURL(file);
      setPreviewImgUrl(previewImgUrl);
      setAvata(await toBase64(file));
    } else {
    }
  };
  return (
    <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={show}
      onHide={handleCloseModal}
      className='_user-manage-modal'
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          <div className='title-content'>
            <FormattedMessage id={`manageUser.${userInfo ? 'edit' : 'add'}`} />
          </div>
          <div className='title-close-btn'>
            <span className='c-pointer' onClick={handleCloseModal}>
              <i className='fas fa-times'></i>
            </span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row'>
            <Form onChange={handleUpdateData}>
              <div className='row mb-3'>
                <Form.Group
                  className={`col-${userInfo ? '12' : '6'}`}
                  controlId='email'
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter your email'
                    defaultValue={objData.email}
                    readOnly={userInfo ? true : false}
                  />
                </Form.Group>
                {!userInfo && (
                  <Form.Group className='col-6' controlId='password'>
                    <Form.Label>
                      <FormattedMessage id='manageUser.password' />
                    </Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter your password'
                      defaultValue={objData.password}
                    />
                  </Form.Group>
                )}
              </div>
              <div className='row mb-3'>
                <div className='col-6'>
                  <Form.Group className='' controlId='firstName'>
                    <Form.Label>
                      <FormattedMessage id='manageUser.firstName' />
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter your first name'
                      autoComplete='off'
                      defaultValue={objData.firstName}
                    />
                  </Form.Group>
                </div>
                <div className='col-6'>
                  <Form.Group className='' controlId='lastName'>
                    <Form.Label>
                      <FormattedMessage id='manageUser.lastName' />
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter your last name'
                      autoComplete='off'
                      defaultValue={objData.lastName}
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className='mb-3' controlId='address'>
                <Form.Label>
                  <FormattedMessage id='manageUser.address' />
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your address'
                  defaultValue={objData.address}
                />
              </Form.Group>
              <div className='row'>
                <div className='col-6'>
                  <div className='row'>
                    <div className='col-6 form-phoneNumber'>
                      <Form.Group className='mb-3' controlId='phoneNumber'>
                        <Form.Label>
                          <FormattedMessage id='manageUser.phoneNumber' />
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter your phone number'
                          defaultValue={objData.phoneNumber}
                        />
                      </Form.Group>
                    </div>
                    <div className='col-6 form-position'>
                      <Form.Group className='mb-3' controlId='positionId'>
                        <Form.Label>
                          <FormattedMessage id='manageUser.position' />
                        </Form.Label>
                        <Form.Select
                          value={objData.positionId || ''}
                          onChange={handleUpdateData}
                        >
                          {positions &&
                            positions.length > 0 &&
                            positions.map((item, idx) => (
                              <option key={idx} value={item.keyMap}>
                                {language === LANGUAGES.EN
                                  ? item.valueEn
                                  : item.valueVi}
                              </option>
                            ))}
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className='col-6 form-sex'>
                  <div className='row'>
                    <div className='col-6'>
                      <Form.Group className='mb-3' controlId='gender'>
                        <Form.Label>
                          <FormattedMessage id='manageUser.gender' />
                        </Form.Label>
                        <Form.Select
                          aria-label='Default select example'
                          value={objData?.gender || ''}
                          onChange={handleUpdateData}
                        >
                          {genders &&
                            genders.length > 0 &&
                            genders.map((item, idx) => {
                              if (idx > 1) return null;
                              return (
                                <option key={idx} value={item.keyMap}>
                                  {language === LANGUAGES.EN
                                    ? item.valueEn
                                    : item.valueVi}
                                </option>
                              );
                            })}
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className='col-6'>
                      <Form.Group className='mb-3' controlId='roleId'>
                        <Form.Label>
                          <FormattedMessage id='manageUser.roleId' />
                        </Form.Label>
                        <Form.Select
                          onChange={handleUpdateData}
                          aria-label='Default select example'
                          value={objData.roleId || ''}
                        >
                          {roles &&
                            roles.length > 0 &&
                            roles.map((item, idx) => (
                              <option key={idx} value={item.keyMap}>
                                {language === LANGUAGES.EN
                                  ? item.valueEn
                                  : item.valueVi}
                              </option>
                            ))}
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
              <Form.Group controlId='image' className='upload-area'>
                <Form.Control
                  name='image'
                  type='file'
                  // required
                  hidden
                  onChange={handleReviewImg}
                  // isInvalid={!!errors.file}
                />
                <Form.Label>
                  <FormattedMessage id='manageUser.image' />
                </Form.Label>
                <div className='upload-btn'>
                  <Form.Label>
                    <i className='fas fa-arrow-circle-up'></i>
                    <FormattedMessage id='manageUser.upload' />
                  </Form.Label>
                </div>
                <div
                  className='preview-img'
                  // onClick={this.handleShowImg}
                >
                  <ImageComponent src={previewImgUrl} />
                </div>
              </Form.Group>
            </Form>
          </div>
          <div className='err-msg'>{errMSG}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>
          <FormattedMessage id='button.save' />
        </Button>
        <Button variant='secondary' onClick={handleCloseModal}>
          <FormattedMessage id='button.close' />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserManageModal;
