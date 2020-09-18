import api from './api-config';

export const postComment = async (postId, formData) => {
  const resp = await api.post(`/posts/${postId}/comments`, { comment: formData });
  return resp.data;
};

export const deleteComment = async (post_id, comment_id) => {
  const resp = await api.delete(`/posts/${post_id}/comments/${comment_id}`)
  return resp.data;
}

export const updateComment = async (post_id, comment_id, body) => {
  const resp = await api.put(`/posts/${post_id}/comments/${comment_id}`, { comment: body });
  console.log(resp.data)
  return resp.data;
};