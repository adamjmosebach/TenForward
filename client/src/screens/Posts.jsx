import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import './Posts.css';

export default function Posts(props) {
  const { posts, currentUser } = props;

  if (posts) {
    return (
      <div>
        {/* <h1>All Posts</h1> */}
        <div className='all-posts'>
          {posts.map(post => (
            <PostCard post={post} currentUser={currentUser} />
          ))}
        </div>
      </div>
    );
  } else {
    return <p>no posts yet</p>;
  }
}
