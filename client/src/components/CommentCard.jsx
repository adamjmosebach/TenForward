import React from 'react';
import { deleteComment } from '../services/comments';
import './CommentCard.css';

export default function CommentCard(props) {
  const { comment, currentUser, thePost } = props;
  // console.log('currentUser in CommentCard = ', currentUser)

  const commentDelete = async (thePost, comment) => {
    // console.log(`thePost.id = ${thePost.id}, comment.id = ${comment.id}`);
    const deleteStatus = await deleteComment(thePost.id, comment.id);
    // thePost.comments.filter((someComment) => someComment.id != comment.id);
    window.location.reload();
  };

  if (currentUser && thePost && comment) {
    return (
      <div className='comment-card'>
        <p>{comment.content}</p>
        {comment.user_id === currentUser.id && (
          <div className='comment-buttons'>
            <button>Edit</button>
            <button onClick={() => commentDelete(thePost, comment)}>
              Delete
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}
