import React, { useState } from 'react';
import './Register.css';
import './Forms.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    img_url: '',
    division: '',
    name: '',
  });
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { username, email, password, img_url, name } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePWConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <form
      className='register-form'
      onSubmit={(e) => {
        e.preventDefault();
        if (passwordConfirm === password) {
          props.registerSubmit(formData);
        } else {
          alert('Passwords do not match');
        }
      }}
    >
      <h3 className='form-heading'>Register</h3>
      <div className='label-input'>
        <label htmlFor='register-username'>Username:</label>
        <input
          type='text'
          name='username'
          id='register-username'
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className='label-input'>
        <label htmlFor='register-email'>Email:</label>
        <input
          type='text'
          name='email'
          id='register-email'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className='label-input'>
        <label htmlFor='register-name'>Name:</label>
        <input
          type='text'
          name='name'
          id='register-name'
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className='label-input'>
        <label htmlFor='register-password'>Password:</label>
        <input
          type='password'
          name='password'
          id='register-password'
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className='label-input'>
        <label htmlFor='register-password-confirm'>Password Confirm:</label>
        <input
          type='password'
          name='passwordConfirm'
          id='register-password-confirm'
          value={passwordConfirm}
          onChange={(e) => handlePWConfirm(e)}
        />
      </div>
      <div className='label-input'>
        <label htmlFor='register-img_url'>Image URL:</label>
        <input
          type='text'
          name='img_url'
          id='register-img_url'
          value={img_url}
          onChange={handleChange}
        />
      </div>
      <div className='label-input division-div'>
        <label htmlFor='register-division'>Division:</label>
        <select name='division' className='division' id='register-division' onChange={handleChange}>
          <option value='' disabled selected>
            --Select Division--
          </option>
          <option value='Command'>Command</option>
          <option value='Operations'>Operations</option>
          <option value='Science'>Science</option>
        </select>
      </div>
      <button className='red-submit'>Submit</button>
    </form>
  );
}
