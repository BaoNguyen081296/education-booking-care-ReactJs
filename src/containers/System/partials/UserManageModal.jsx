import React, { useState, useCallback, useEffect } from 'react';
import './UserManageModal.scss';
import { Form, Button, Modal } from 'react-bootstrap';
// import useDebounce from 'hooks/useDebounce';
const initValue = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  sex: 1,
  roleId: 1,
};
const UserManageModal = ({ show = false, onSubmit, userInfo, closeModal }) => {
  const [errMSG, setErrMSG] = useState(null);
  const [objData, setObjData] = useState(initValue);
  const checkValidData = (data) => {
    const keys = [
      { key: 'email', msg: 'Email' },
      { key: 'password', msg: 'Password' },
      { key: 'firstName', msg: 'First name' },
      { key: 'lastName', msg: 'Last name' },
      { key: 'address', msg: 'Address' },
      { key: 'phoneNumber', msg: 'Phone number' },
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
  };

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
  }, [closeModal]);

  const handleSubmit = useCallback(() => {
    const isValid = checkValidData(objData);
    if (isValid) {
      onSubmit(objData);
    }
  }, [objData, onSubmit]);

  useEffect(() => {
    if (userInfo) setObjData(userInfo);
    else setObjData(initValue);
  }, [show, userInfo]);

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
            {userInfo ? 'Edit User Information' : 'Create New User'}
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
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  defaultValue={objData.email}
                />
                {/* <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text> */}
              </Form.Group>
              {
                <Form.Group className='mb-3' controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter your password'
                    defaultValue={objData.password}
                  />
                </Form.Group>
              }
              <div className='row mb-3'>
                <div className='col-6'>
                  <Form.Group className='' controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
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
                    <Form.Label>Last Name</Form.Label>
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
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your address'
                  defaultValue={objData.address}
                />
              </Form.Group>
              <div className='row'>
                <div className='col-6 form-phoneNumber'>
                  <Form.Group className='mb-3' controlId='phoneNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter your phone number'
                      defaultValue={objData.phoneNumber}
                    />
                  </Form.Group>
                </div>
                <div className='col-6 form-sex'>
                  <div className='row'>
                    <div className='col-6'>
                      <Form.Group className='mb-3' controlId='sex'>
                        <Form.Label>Sex</Form.Label>
                        <Form.Select
                          aria-label='Default select example'
                          defaultValue={objData.sex}
                        >
                          <option value={1}>Male</option>
                          <option value={0}>Female</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className='col-6'>
                      <Form.Group className='mb-3' controlId='roleId'>
                        <Form.Label>Role</Form.Label>
                        <Form.Select
                          aria-label='Default select example'
                          defaultValue={objData.roleId}
                        >
                          <option value={1}>Admin</option>
                          <option value={2}>Doctor</option>
                          <option value={3}>Patient</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <div className='err-msg'>{errMSG}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Save</Button>
        <Button variant='secondary' onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserManageModal;
