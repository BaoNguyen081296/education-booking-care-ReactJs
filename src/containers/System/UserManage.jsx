import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import {
  deleteUser,
  getAllUsers,
  editUser,
  createNewUser,
} from 'services/userService';
import './UserManage.scss';
import { Button } from 'react-bootstrap';
import UserManageModal from './partials/UserManageModal';
import { showToast } from 'utils/utils';
// import { emmiter } from 'utils/emitter';
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      show: false,
      userInfo: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        gender: '',
        position: '',
        role: '',
        image: '',
      },
    };
  }

  getAllUsersFromUserManage = async () => {
    const res = await getAllUsers();
    if (res && res.errCode === 0) {
      this.setState({
        user: res.data,
      });
    }
  };
  async componentDidMount() {
    this.getAllUsersFromUserManage();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('didupdate');
  }

  closeModal = () => {
    this.setState({ show: false, userInfo: null });
  };

  handleSubmit = async (data) => {
    try {
      let res = null;
      let type = null;
      if (data && data.id) {
        type = 'editSuccess';
        res = await editUser(data);
      }
      if (data && !data.id) {
        type = 'addSuccess';
        res = await createNewUser(data);
      }
      if (res) {
        const { errCode, message } = res;
        if (errCode === 0) {
          showToast(
            this.props.intl.formatMessage({ id: `manageUser.${type}` }),
            'success'
          );
          this.getAllUsersFromUserManage();
          this.setState({ show: false, userInfo: null });
          // emmiter.emit()
        } else {
          showToast(message);
        }
      }
    } catch (e) {
      console.log('e: ', e);
    }
  };

  handleDeleteUser = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res) {
        const { errCode } = res;
        if (errCode === 0) {
          showToast(
            this.props.intl.formatMessage({ id: `manageUser.deleteSuccess` }),
            'success'
          );
          this.getAllUsersFromUserManage();
        }
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  render() {
    return (
      <div className='user-manage'>
        <div className='user-manage-wrapper page-container'>
          <div className='user-manage-title'>
            <h2 className='text-center'>
              {' '}
              <FormattedMessage id='manageUser.title' />
            </h2>
            <div className='create-user'>
              <Button
                onClick={() => {
                  this.setState({ show: true, userInfo: null });
                }}
              >
                <i className='fas fa-user-plus'></i> &nbsp;
                <FormattedMessage id='manageUser.add' />
              </Button>
            </div>
          </div>
          <table id='customers'>
            <thead>
              <tr>
                <th>Email</th>
                <th>
                  <FormattedMessage id='manageUser.firstName' />
                </th>
                <th>
                  <FormattedMessage id='manageUser.lastName' />
                </th>
                <th>
                  <FormattedMessage id='manageUser.address' />
                </th>
                <th>
                  <FormattedMessage id='manageUser.phoneNumber' />
                </th>
                <th>
                  <FormattedMessage id='manageUser.action' />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.user.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.phoneNumber}</td>
                  <td className='action'>
                    <Button
                      variant='success'
                      onClick={() => {
                        this.setState({
                          userInfo: item,
                          show: true,
                        });
                      }}
                    >
                      <i className='fas fa-user-edit'></i>
                    </Button>
                    <Button
                      variant='danger'
                      onClick={() => {
                        this.handleDeleteUser(item.id);
                      }}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UserManageModal
          {...{
            show: this.state.show,
            closeModal: this.closeModal,
            userInfo: this.state.userInfo,
            onSubmit: this.handleSubmit,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(UserManage));
