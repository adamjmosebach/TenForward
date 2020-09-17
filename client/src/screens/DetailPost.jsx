import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../services/posts';

export default function DetailPost(props) {
  const { currentUser } = props;
  const { id } = useParams();
  const [thePost, setThePost] = useState(null);

  useEffect(() => {
    const fetchOnePost = async (id) => {
      const matchingPost = await getOnePost(id);
      setThePost(matchingPost);
    };
    fetchOnePost(id);
  }, []);

  if (thePost) {
    return (
      <div>
        <h3>Post Detail</h3>
        <h3>(Post #{thePost.id})</h3>
        <h3>{thePost.title}</h3>
        <h4>{thePost.content}</h4>
        <div className='post-image-container'>
          <img src={thePost.img_url} className='post-image' />
        </div>
        {currentUser && thePost.user_id === currentUser.id && (
          <Link to={`/posts/${thePost.id}/edit`}>
            <button>Edit this Post</button>
          </Link>
        )}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
