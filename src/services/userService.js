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

export const getTopDoctorHome = (limit) => {
  return axios.get(urls.doctor.home.topDoctor, {
    params: {
      limit,
    },
  });
};

export const getDoctorList = () => {
  return axios.get(urls.doctor.list);
};

export const saveDetailDoctor = (data) => {
  return axios.post(urls.doctor.saveInfo, data);
};

export const getDoctorInforById = (id) => {
  return axios.get(urls.doctor.detail, {
    params: { id },
  });
};
export const getMarkdownDataById = (id) => {
  return axios.get(urls.doctor.markdown, {
    params: { id },
  });
};
