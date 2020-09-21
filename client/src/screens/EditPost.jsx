import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/posts';
import './EditPost.css';
import './Forms.css';

export default function EditPost(props) {
  const { currentUser, editPostSubmit, deletePostSubmit } = props;
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchOne = async (id) => {
      const thePost = await getOnePost(id);
      setFormData({
        title: thePost.title,
        content: thePost.content,
        img_url: thePost.img_url,
        user_id: thePost.user_id,
      });
    };
    fetchOne(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (formData && currentUser && currentUser.id === formData.user_id) {
    return (
      <div>
        <form
          className='create-edit-post-form'
          onSubmit={(e) => {
            e.preventDefault();
            editPostSubmit(id, formData);
          }}
        >
          <h3 className='form-heading edit-post-heading'>Edit Post</h3>;
          <div className='label-input'>
            <label htmlFor='edit-post-title'>Title:</label>
            <input
              type='text'
              name='title'
              className='edit-post-title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='label-input textarea-label-input edit-post-content-input'>
            <label htmlFor='edit-post-content textarea-label-input'>
              Write your post here:
            </label>
            <textarea
              name='content'
              className='edit-post-content'
              value={formData.content}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='label-input'>
            <label htmlFor='edit-post-img_url'>Image URL:</label>
            <input
              type='text'
              name='img_url'
              className='edit-post-img_url'
              value={formData.img_url}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='edit-post-buttons'>
            <button className='delete-post-button' onClick={() => deletePostSubmit(id)}>
              Delete Post
            </button>
            <button className='red-submit' id='edit-post-submit'>Submit Changes</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <h3>You must be logged in as the author of the post to edit it</h3>;
  }
}
