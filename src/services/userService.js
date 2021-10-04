import axios from '../axios';
import urls from 'configs/urls';

export const handleLoginApi = async (email, password) => {
  return axios.post(urls.user.login, { email, password });
};

export const getAllUsers = (id) => {
  return axios.get(urls.user.list, {
    params: {
      id,
    },
  });
};

export const editUser = (data) => {
  return axios.put(data.id ? urls.user.update : urls.user.create, data);
};
export const createNewUser = (data) => {
  return axios.post(urls.user.create, data);
};
export const deleteUser = (id) => {
  return axios.delete(urls.user.delete, { data: { id } });
};

export const getAllCode = (type) => {
  return axios.get(urls.user.allcode, {
    params: {
      type,
    },
  });
};
