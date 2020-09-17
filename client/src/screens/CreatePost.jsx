import React, { useState } from 'react';

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
    const {name, value} = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      user_id: currentUser.id
    }))
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        createPostSubmit(formData)
      }}>
        <label>
          Title
          <input type='text' name='title' onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Write your post here
          <textarea name='content' onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Image URL
          <input type='text' name='img_url' onChange={(e) => handleChange(e)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
