import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from 'services/userService';
import './UserManage.scss';
import { Button } from 'react-bootstrap';
import UserManageModal from './partials/UserManageModal';
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      show: true,
      userInfo: null,
    };
  }

  async componentDidMount() {
    const res = await getAllUsers();
    if (res && res.errCode === 0) {
      this.setState({
        user: res.data,
      });
    }
  }

  toggleModal = () => {
    if (this.state.show) {
      this.setState({
        show: !this.state.show,
        userInfo: null,
      });
    } else {
      this.setState({
        show: !this.state.show,
      });
    }
  };

  handleSubmit = () => {
    this.toggleModal();
  };

  render() {
    return (
      <div className='user-manage'>
        <div className='user-manage-wrapper page-container'>
          <div className='user-manage-title'>
            <h2 className='text-center'>Manage users</h2>
            <div className='create-user'>
              <Button onClick={this.toggleModal}>
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
                    <Button variant='danger'>
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
            toggle: this.toggleModal,
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
