import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOnePost } from '../services/posts';
import { postComment } from '../services/comments';
import CommentCard from '../components/CommentCard';
import './DetailPost.css';

export default function DetailPost(props) {
  const { currentUser } = props;
  const { id } = useParams();
  const [thePost, setThePost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [newComment, setNewComment] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchOnePost = async (id) => {
      const matchingPost = await getOnePost(id);
      setThePost(matchingPost);
      setAuthor(matchingPost.user.username);
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
      <div className='post-detail-div'>
        <div className='detail-hero-content'>
          {thePost.title && <h3 className='detail-title'>{thePost.title}</h3>}
          {thePost.content && (
            <h4 className='detail-content'>{thePost.content}</h4>
          )}
          {thePost.img_url && (
            <div className='post-detail-image-container'>
              <img src={thePost.img_url} className='post-image' />
            </div>
          )}
        </div>
        {thePost.comments &&
          thePost.comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              thePost={thePost}
            />
          ))}
        <form className='comment-form' onSubmit={handleCommentSubmit}>
          <textarea
            id='comment-textarea'
            name='comment'
            placeholder='Your Comment Here...'
            onChange={(e) => handleCommentChange(e)}
          />
          <button className='post-comment-submit'>Post Your Comment</button>
        </form>
        {author && <div className='detail-author'>post by: {author}</div>}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
