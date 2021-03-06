import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import './Forms.css';

export default function EditProfile(props) {
  const { currentUser, updateProfileSubmit } = props;

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    img_url: '',
    division: '',
    name: '',
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
        img_url: currentUser.img_url,
        division: currentUser.division,
        name: currentUser.name,
      });
    }
  }, [currentUser]);

  const { username, email, password, img_url, division, name } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (currentUser) {
    return (
      <div className='edit-profile-div'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password) {
              updateProfileSubmit(currentUser.id, formData);
            } else {
              alert('You must confirm your password');
            }
          }}
        >
          <h3 className='form-heading'>Edit Profile</h3>
          <div className='label-input'>
            <label htmlFor='update-profile-username'>Username:</label>
            <input
              type='text'
              name='username'
              id='update-profile-username'
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className='label-input'>
            <label htmlFor='update-profile-email'>Email:</label>
            <input
              type='text'
              name='email'
              id='update-profile-email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className='label-input'>
            <label htmlFor='update-profile-name'>Name:</label>
            <input
              type='text'
              name='name'
              id='update-profile-name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className='label-input'>
            <label className='update-profile-img_url'>Image URL:</label>
            <input
              type='text'
              name='img_url'
              id='update-profile-img_url'
              value={img_url}
              onChange={handleChange}
            />
          </div>
          <div className='label-input'>
            <label className='update-profile-division'>Division:</label>
            <select
              name='division'
              className='division edit-profile-division'
              id='update-profile-division'
              value={division}
              onChange={handleChange}
            >
              <option value='' disabled>
                --Select Division--
              </option>
              <option value='Command'>Command</option>
              <option value='Operations'>Operations</option>
              <option value='Science'>Science</option>
            </select>
          </div>
          <div className='label-input'>
            <label className='update-profile-confirm-password'>
              Confirm Password:
            </label>
            <input
              type='password'
              name='password'
              id='update-profile-confirm-password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <button className='red-submit'>Update</button>
        </form>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
