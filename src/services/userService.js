import axios from '../axios';

export const handleLoginApi = async (email, password) => {
  return axios.post(`/api/login`, { email, password });
};
