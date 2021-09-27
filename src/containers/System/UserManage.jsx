import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { deleteUser, getAllUsers, manageUser } from 'services/userService';
import './UserManage.scss';
import { Button } from 'react-bootstrap';
import UserManageModal from './partials/UserManageModal';
// import { emmiter } from 'utils/emitter';
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      show: false,
      userInfo: null,
    };
  }

  async componentDidMount() {
    this.getAllUsersFromUserManage();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('didupdate');
  }

  getAllUsersFromUserManage = async () => {
    const res = await getAllUsers();
    if (res && res.errCode === 0) {
      this.setState({
        user: res.data,
      });
    }
  };

  closeModal = () => {
    this.setState({ show: false, userInfo: null });
  };

  handleSubmit = async (data) => {
    try {
      const res = await manageUser(data);
      if (res) {
        const { errCode, message } = res;
        if (errCode === 0) {
          this.getAllUsersFromUserManage();
          this.setState({ show: false, userInfo: null });
          // emmiter.emit()
        } else {
          alert(message);
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
        const { errCode, message } = res;
        if (errCode === 0) {
          this.getAllUsersFromUserManage();
          console.log('message: ', message);
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
            <h2 className='text-center'>Manage users</h2>
            <div className='create-user'>
              <Button
                onClick={() => {
                  this.setState({ show: true, userInfo: null });
                }}
              >
                <i className='fas fa-user-plus'></i> Create new user
              </Button>
            </div>
          </div>
          <table id='customers'>
            <thead>
              <tr>
                <th>Email</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.user.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
