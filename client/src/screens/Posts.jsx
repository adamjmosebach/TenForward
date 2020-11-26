import React from 'react';
import PostCard from '../components/PostCard';
import logoLoading from '../assets/logoLoading.gif';
import lcarsLoading from '../assets/lcarsLoading.gif';
import lcarsLoading2 from '../assets/lcarsLoading2.gif';
import './Posts.css';

export default function Posts(props) {
  const { posts, currentUser } = props;

  if (posts.length) {
    return (
      <div>
        <div className='all-posts'>
          {posts.map((post) => (
            <PostCard post={post} currentUser={currentUser} key={post.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      // <div className='loading-federation' style={{ backgroundImage: `url(${logoLoading})` }}></div>
      // <div className='loading-div'>
      //   <img src={logoLoading} className='loading-gif' />
      // </div>
      <img src={lcarsLoading2} alt='Loading' className='loading' />
      // <h1 className='loading'>Loading...</h1>
    );
  }
}
