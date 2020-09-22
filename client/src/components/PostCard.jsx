import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard(props) {
  const { post, currentUser } = props;

  return (
    <div className='post-card'>
      <div className='post-card-content'>
        {post.title && <h3 className='postcard-title'>{post.title}</h3>}
        {post.content && <h4 className='postcard-content'>{post.content}</h4>}
        {post.img_url && (
          <div className='post-image-container'>
            <img src={post.img_url} className='post-image' alt='posted pic' />
          </div>
        )}
      </div>
      <div className='postcard-buttons'>
        {currentUser && post.user_id === currentUser.id && (
          <div className='postcard-button-row'>
            <div className='pcb-spacer-1 pcb-s-edit'></div>
            <div className='pcb-spacer-2'></div>
            <Link
              to={`/posts/${post.id}/edit`}
              className='postcard-button-link'
            >
              <button className='postcard-button pcb-edit'>
                Edit this Post
              </button>
            </Link>
          </div>
        )}
        <div className='postcard-button-row'>
          <div className='pcb-spacer-1 pcb-s-comments'></div>
          <div className='pcb-spacer-2'></div>
          <Link to={`/posts/${post.id}`} className='postcard-button-link'>
            <button className='postcard-button pcb-comments'>Comments</button>
          </Link>
        </div>
      </div>
    </div>
  );
  // }
}
