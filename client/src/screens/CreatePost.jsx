import React, { useState } from 'react';
import './Forms.css';
import './CreatePost.css'

export default function CreatePost(props) {
  const { setFromCreate, currentUser, createPostSubmit } = props;
  setFromCreate(false);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    img_url: '',
    user_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      user_id: currentUser.id,
    }));
  };

  return (
    <div className='create-post-div'>
      <form
        className='create-edit-post-form'
        onSubmit={(e) => {
          e.preventDefault();
          createPostSubmit(formData);
        }}
      >
        <h3 className='form-heading'>Create a Post</h3>
        <div className='label-input'>
          <label htmlFor='create-post-title'>Title:</label>
          <input
            type='text'
            name='title'
            id='create-post-title'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='label-input textarea-label-input'>
          <label
            htmlFor='create-post-content'
            className='text-area-content-label'
          >
            Write your post here:
          </label>
          <textarea
            name='content'
            className='create-post-content'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='label-input'>
          <label htmlFor='create-post-img_url'>Image URL:</label>
          <input
            type='text'
            name='img_url'
            className='create-post-img_url'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className='red-submit'>Submit</button>
      </form>
    </div>
  );
}
