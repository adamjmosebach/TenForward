import React from 'react';
import PostCard from '../components/PostCard';
import './Posts.css';

export default function Posts(props) {
  const { posts, currentUser } = props;

  if (posts) {
    return (
      <div>
        <div className='all-posts'>
          {posts.map((post) => (
            <PostCard post={post} currentUser={currentUser} key={post.id}/>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='loading-federation'></div>
    ); 
  }
}
