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

export const manageUser = (data) => {
  return axios.put(data.id ? urls.user.update : urls.user.create, data);

  // return axios.get('/api/get-all-users', {
  //   params: {
  //     id: data,
  //   },
  // });
};

export const deleteUser = (id) => {
  return axios.delete(urls.user.delete, { data: { id } });
};
