const DEPLOY_MODE = process.env.NODE_ENV || 'development';
const LOCAL_BE =
  (process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080') + '/api';
const urls = {
  baseURL: DEPLOY_MODE === 'development' ? LOCAL_BE : '',
  user: {
    login: '/login',
    list: '/user/list',
    update: '/user/update',
    create: '/user/create',
    delete: '/user/delete',
    allcode: '/get-all-code',
    // changePass: '/api/user/change-pass',
    // refresh: '/api/v2/user/refresh',
    // settings: '/api/v2/user/settings',
  },
  admin: {
    login: '/admin/login',
  },
  doctor: {
    home: {
      topDoctor: '/doctor',
    },
    list: '/doctor/list',
    saveInfo: '/doctor/info-save',
    detail: '/doctor/detail',
    markdown: '/doctor/markdown',
  },
};

export default urls;
