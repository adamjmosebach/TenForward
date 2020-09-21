import api from './api-config';

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};