import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from 'services/userService';
import './UserManage.scss';
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  async componentDidMount() {
    const res = await getAllUsers();
    console.log('res: ', res);
    if (res && res.errCode === 0) {
      this.setState({
        user: res.data,
      });
    }
  }
  render() {
    console.log('user: ', this.state.user);
    return (
      <div className='user-manage'>
        <div className='user-manage-wrapper page-container'>
          <div className='user-manage-title'>
            <h3 className='text-center'>Manage users</h3>
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
                    <button className='btn-success'>
                      <i class='fas fa-user-edit'></i>
                    </button>
                    <button className='btn-danger'>
                      <i class='fas fa-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
