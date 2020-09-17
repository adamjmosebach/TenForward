import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/posts';

export default function EditPost(props) {
  const { currentUser, editPostSubmit, deletePostSubmit } = props;
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchOne = async id => {
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

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (formData && currentUser && currentUser.id === formData.user_id) {
    return (
      <div>
        <div>Edit Post Screen</div>;
        <form
          onSubmit={e => {
            e.preventDefault();
            editPostSubmit(id, formData);
          }}
        >
          <label>
            Title
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            Write your post here
            <textarea
              name='content'
              value={formData.content}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            Image URL
            <input
              type='text'
              name='img_url'
              value={formData.img_url}
              onChange={e => handleChange(e)}
            />
          </label>
          <button>Submit Changes</button>
        </form>
        <button onClick={()=>deletePostSubmit(id)}>Delete this Post</button>
      </div>
    );
  } else {
    return <h3>You must be logged in as the author of the post to edit it</h3>;
  }
}
