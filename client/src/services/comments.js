import api from './api-config';

export const postComment = async (postId, formData) => {
  const resp = await api.post(`/posts/${postId}/comments`, { comment: formData });
  return resp.data;
};