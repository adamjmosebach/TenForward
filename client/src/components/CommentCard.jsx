import React from 'react';
import './CommentCard.css';

export default function CommentCard(props) {
  const { comment, currentUser } = props;
  console.log('currentUser in CommentCard = ',currentUser)
  if (currentUser) {
    return (
      <div className='comment-card'>
        <p>{comment.content}</p>
        {comment.user_id === currentUser.id && (
          <div className='comment-buttons'>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
      </div>
    );
  } else {
    return <h3>Loading...</h3>
  }
}
