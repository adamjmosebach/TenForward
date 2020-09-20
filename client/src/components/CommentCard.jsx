import React, { useState } from 'react';
import { deleteComment, updateComment } from '../services/comments';
import './CommentCard.css';

export default function CommentCard(props) {
  const { comment, currentUser, thePost } = props;
  // console.log('currentUser in CommentCard = ', currentUser)
  const [newerComment, setNewerComment] = useState(comment.content);
  const [editMode, updateEditMode] = useState(false);

  const commentDelete = async () => {
    const deleteStatus = await deleteComment(thePost.id, comment.id);
    // thePost.comments.filter((someComment) => someComment.id != comment.id);
    window.location.reload();
  };

  const editComment = async () => {
    updateEditMode(true);
  };

  const handleCommentChange = (e) => {
    setNewerComment(e.target.value);
  };

  const handleCommentEditSubmit = async () => {
    const updatedComment = await updateComment(thePost.id, comment.id, {
      content: newerComment,
      post_id: thePost.id,
      user_id: currentUser.id,
    });
    console.log(updateComment);
  };

  if (currentUser && thePost && comment) {
    if (editMode) {
      return (
        <div className='comment-card'>
          <form onSubmit={handleCommentEditSubmit}>
            <input
              type='text'
              name='newerComment'
              value={newerComment}
              onChange={(e) => handleCommentChange(e)}
            />
            <button>Submit Comment Change</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='comment-card'>
          <p className='show-comment-content'>{comment.content}</p>
          {comment.user_id === currentUser.id && (
            <div className='comment-buttons'>
              <button className='comment-button-delete' onClick={commentDelete}>
                Delete
              </button>
              <button className='comment-button-edit' onClick={editComment}>
                Edit
              </button>
            </div>
          )}
        </div>
      );
    }
  } else {
    return <h3>Loading...</h3>;
  }
}
