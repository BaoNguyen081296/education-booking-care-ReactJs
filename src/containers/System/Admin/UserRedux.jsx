import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import './UserRedux.scss';
import * as actions from 'store/actions';
import ImageComponent from 'components/ImageComponent';
import { LANGUAGES } from 'utils';
class UserRedux extends Component {
  constructor() {
    super();
    this.state = {
      previewImgUrl: null,
      showImg: false,
    };
  }

  async componentDidMount() {
    try {
      this.props.getGenderStart(['gender', 'role', 'position']);
    } catch (error) {
      console.log('error: ', error);
    }
  }
  handleReviewImg = (e) => {
    const file = e.target.files[0];
    if (file && ['image/jpeg', 'image/png'].includes(file.type)) {
      const previewImgUrl = URL.createObjectURL(file);
      this.setState({
        previewImgUrl,
      });
    } else {
    }
  };
  handleShowImg = () => {
    this.setState({
      showImg: true,
    });
  };
  render() {
    const { roles, genders, positions, language } = this.props;
    return (
      <div className='_user-redux'>
        <div className='_user-redux-wrapper page-container'>
          <h2 className='text-center _user-redux-title'>User Redux</h2>
          <div className='_user-redux-body'>
            <div className='add-user'>
              <h3>
                <FormattedMessage id='manageUser.add' />
              </h3>
            </div>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('e: ', e);
              }}
            >
              <Row className='mb-3'>
                <Form.Group as={Col} controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group as={Col} controlId='password'>
                  <Form.Label>
                    <FormattedMessage id='manageUser.password' />
                  </Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group className='mb-3' controlId='firstName'>
                  <Form.Label>
                    <FormattedMessage id='manageUser.firstName' />
                  </Form.Label>
                  <Form.Control placeholder='First name' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='lastName'>
                  <Form.Label>
                    <FormattedMessage id='manageUser.lastName' />
                  </Form.Label>
                  <Form.Control placeholder='Last name' />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <div className='col-9'>
                  <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>
                      <FormattedMessage id='manageUser.address' />
                    </Form.Label>
                    <Form.Control placeholder='Address' />
                  </Form.Group>
                </div>
                <div className='col-3'>
                  <Form.Group className='mb-3' controlId='phoneNumber'>
                    <Form.Label>
                      <FormattedMessage id='manageUser.phoneNumber' />
                    </Form.Label>
                    <Form.Control placeholder='Phone number' />
                  </Form.Group>
                </div>
              </Row>

              <Row className='mb-3'>
                <Form.Group as={Col} controlId='gender'>
                  <Form.Label>
                    <FormattedMessage id='manageUser.gender' />
                  </Form.Label>
                  <Form.Select>
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, idx) => {
                        if (idx > 1) return null;
                        return (
                          <option key={idx}>
                            {language === LANGUAGES.EN
                              ? item.valueEn
                              : item.valueVi}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='position'>
                  <Form.Label>
                    <FormattedMessage id='manageUser.position' />
                  </Form.Label>
                  <Form.Select>
                    {positions &&
                      positions.length > 0 &&
                      positions.map((item, idx) => (
                        <option key={idx}>
                          {language === LANGUAGES.EN
                            ? item.valueEn
                            : item.valueVi}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId='roleId'>
                  <Form.Label>
                    <FormattedMessage id='manageUser.roleId' />
                  </Form.Label>
                  <Form.Select>
                    {roles &&
                      roles.length > 0 &&
                      roles.map((item, idx) => (
                        <option key={idx}>
                          {language === LANGUAGES.EN
                            ? item.valueEn
                            : item.valueVi}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId='previewImg'>
                  <Form.Control
                    type='file'
                    required
                    hidden
                    name='previewImg'
                    onChange={this.handleReviewImg}
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
                    {this.state.previewImgUrl && (
                      <div
                        className='preview-img c-pointer'
                        onClick={this.handleShowImg}
                      >
                        <ImageComponent src={this.state.previewImgUrl} />
                      </div>
                    )}
                  </div>
                </Form.Group>
              </Row>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <ViewImageModal
          {...{
            onHide: () => this.setState({ showImg: false }),
            showModalImg: this.state.showImg,
            dataImg: this.state.previewImgUrl,
          }}
        />
      </div>
    );
  }
}
const ViewImageModal = ({ showModalImg, dataImg, onHide, ...props }) => {
  return (
    <Modal
      className='product-img-view-modal'
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onHide={onHide}
      show={showModalImg}
      {...props}
    >
      <Modal.Body>
        <div className='_product-image-modal'>
          <img className='img-fluid' src={dataImg} alt='' />
        </div>
      </Modal.Body>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genders: state.admin.genders,
    roles: state.admin.roles,
    positions: state.admin.positions,
    isLoading: state.admin.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: (type) => dispatch(actions.getAllCodeStart(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
