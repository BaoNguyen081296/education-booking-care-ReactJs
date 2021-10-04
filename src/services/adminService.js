import axios from '../axios';
import urls from 'configs/urls';

const adminService = {
  /**
   * Đăng nhập hệ thống
   * {
   *  "username": "string",
   *  "password": "string"
   * }
   */
  login(data) {
    return axios.post(urls.admin.login, data);
  },
};

export default adminService;
