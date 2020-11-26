import React from 'react';
import PostCard from '../components/PostCard';
import logoLoading from '../assets/logoLoading.gif';
import lcarsLoading from '../assets/lcarsLoading.gif';
import lcarsLoading2 from '../assets/lcarsLoading2.gif';
import './Posts.css';

export default function Posts(props) {
  const { posts, currentUser, postsUpdated } = props;

  if (postsUpdated) {
    return <div className='loading'>It loaded fine.</div>;
      // <div>
      //   <div className='all-posts'>
      //     {posts.map((post) => (
      //       <PostCard post={post} currentUser={currentUser} key={post.id} />
      //     ))}
      //   </div>
      // </div>
      
   
  } else {
    return <div className='loading'>Loading...</div>;
  }
}
