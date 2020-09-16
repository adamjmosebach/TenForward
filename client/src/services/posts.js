import api from './api-config';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const updatePost = async (id, body) => {
  const resp = await api.put(`/posts/${id}`, { post: body });
};
