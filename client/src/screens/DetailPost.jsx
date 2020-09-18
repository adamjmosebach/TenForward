import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getOnePost } from '../services/posts';
import { postComment } from '../services/comments';
import CommentCard from '../components/CommentCard';

export default function DetailPost(props) {
  const { currentUser } = props;
  const { id } = useParams();
  const [thePost, setThePost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchOnePost = async (id) => {
      const matchingPost = await getOnePost(id);
      setThePost(matchingPost);
    };
    fetchOnePost(id);
  }, []);

  const handleCommentChange = (e) => {
    setNewComment({
      content: e.target.value,
      post_id: thePost.id,
      user_id: currentUser.id,
    });
  };

  const handleCommentSubmit = async () => {
    const postWithComments = await postComment(thePost.id, newComment);
    setNewComment('');
    history.push(`/posts/${thePost.id}`);
  };

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
        {thePost.comments &&
          thePost.comments.map((comment) => (
            <CommentCard comment={comment} currentUser={currentUser} thePost={thePost} />
          ))}
        {currentUser && thePost.user_id === currentUser.id && (
          <Link to={`/posts/${thePost.id}/edit`}>
            <button>Edit this Post</button>
          </Link>
        )}
        <form onSubmit={handleCommentSubmit}>
          <textarea name='comment' onChange={(e) => handleCommentChange(e)} />
          {/* <Link to={`/posts/${thePost.id}/comments/create`}> */}
          <button>Make A Comment</button>
          {/* </Link> */}
        </form>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
