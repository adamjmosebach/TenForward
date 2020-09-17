import api from './api-config';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const postPost = async (formData) => {
  const resp = await api.post('/posts', { post: formData });
  return resp.data;
};

export const updatePost = async (id, body) => {
  const resp = await api.put(`/posts/${id}`, { post: body });
  return resp.data;
};

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp.data;
};
