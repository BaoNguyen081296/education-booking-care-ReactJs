import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../store/actions';
import './Login.scss';
import { handleLoginApi } from 'services/userService';
import { KeyCodeUtils } from 'utils';
// import { FormattedMessage } from 'react-intl';

const PASSWORD = 'password';
class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
    this.state = {
      userName: '',
      password: '',
      errMessage: '',
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userName') this.setState({ ...this.state, userName: value });
    else this.setState({ ...this.state, password: value });
  };
  handleLogin = async () => {
    this.setState({ errMessage: '' });
    try {
      const data = await handleLoginApi(
        this.state.userName,
        this.state.password
      );
      if (data && data.errCode !== 0)
        this.setState({ errMessage: data.message });

      if (data && data.errCode === 0) this.props.userLoginSuccess(data.user);
    } catch (err) {
      if (err.response && err.response.data)
        this.setState({ errMessage: err.response.data.message });
    }
  };
  toggleShowPassword = () => {
    const passwordEle = document.querySelector('#password');
    const eyeEle = document.querySelector('.fa-eye');
    const eyeSlashEle = document.querySelector('.fa-eye-slash');
    if (passwordEle.type === PASSWORD) {
      passwordEle.type = 'text';
      eyeSlashEle.classList.add('hide');
      eyeEle.classList.remove('hide');
    } else {
      passwordEle.type = PASSWORD;
      eyeEle.classList.add('hide');
      eyeSlashEle.classList.remove('hide');
    }
  };
  handleKeyPress = (e) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === KeyCodeUtils.ENTER) {
      e.preventDefault();
      this.handleLogin();
    }
  };
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }
  render() {
    return (
      <div className='login-background'>
        <div className='login-container'>
          <div className='login-content row'>
            <div className='col-12 text-center'>
              <p className='title'>Login</p>
            </div>
            <div className='col-12 form-group'>
              <label htmlFor='userName'>User name:</label>
              <div className='input-wrapper'>
                <input
                  type='text'
                  name='userName'
                  id=''
                  className='form-control'
                  placeholder='Enter your user name'
                  value={this.state.userName}
                  onChange={(e) => this.handleOnChange(e)}
                  autoComplete='on'
                />
              </div>
            </div>
            <div className='col-12'>
              <label htmlFor='password'>Password:</label>
              <div className='password input-wrapper'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='form-control'
                  placeholder='Enter your password'
                  onChange={(e) => this.handleOnChange(e)}
                  value={this.state.password}
                />
                <span onClick={this.toggleShowPassword} className='eye-icon'>
                  <i className='far fa-eye hide'></i>
                  <i className='fas fa-eye-slash'></i>
                </span>
              </div>
            </div>
            <div className='error-msg msg'>
              <span>{this.state.errMessage}</span>
            </div>
            <div className='col-12 form-group msg'>
              <span className='forgot-btn'>Forgot your password?</span>
            </div>

            <div className='col-12 btn-area form-group'>
              <button
                type='submit'
                className='login-btn'
                onClick={this.handleLogin}
              >
                Login
              </button>
            </div>
            <div className='col-12 signin-other'>
              <div className='signin-other-title forgot-btn '>
                Or sign in with:
              </div>
              <div className='signin-other-content'>
                <i className='fab fa-facebook-f facebook'></i>
                {/* <i className='fab fa-twitter'></i> */}
                <i className='fab fa-google-plus-g google'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
