import React from 'react';
import { Link } from 'react-router-dom'
import './PostCard.css';

export default function PostCard(props) {
  const { post, currentUser } = props;

  return (
    <div className='post-card'>
      <h3>{post.title}</h3>
      <h4>{post.content}</h4>
      <div className='post-image-container'>
        <img src={post.img_url} className='post-image' />
      </div>
      {currentUser && post.user_id === currentUser.id &&
        <Link to={`/posts/${post.id}/edit`}><button>Edit this Post</button></Link>
      }
      <button>Make A Comment</button>
      <Link to={`/posts/${post.id}`}><button>See Comments</button></Link>
    </div>
  );
}
