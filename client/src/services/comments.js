import api from './api-config';

export const postComment = async (postId, formData) => {
  const resp = await api.post(`/posts/${postId}/comments`, { comment: formData });
  return resp.data;
};

export const deleteComment = async (post_id, comment_id) => {
  const resp = await api.delete(`/posts/${post_id}/comments/${comment_id}`)
  return resp.data;
}