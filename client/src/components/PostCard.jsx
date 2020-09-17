import React from 'react';
import { Link } from 'react-router-dom'
import './PostCard.css';

export default function PostCard(props) {
  const { post, currentUser } = props;

  // if (currentUser.username) {
    return (
      <div className='post-card'>
        {/* <p>{currentUser.username}</p> */}
        <h3>{post.title}</h3>
        <h4>{post.content}</h4>
        <div className='post-image-container'>
          <img src={post.img_url} className='post-image' />
        </div>
        {currentUser && post.user_id === currentUser.id &&
          <Link to={`/posts/${post.id}/edit`}><button>Edit this Post</button></Link>
        }
        <Link to={`/posts/${post.id}`}><button>See Comments</button></Link>
      </div>
    );
  // }
}
