import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Forms.css'

export default function Login(props) {
  const { loginSubmit } = props;

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-div'>
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
          loginSubmit(formData);
        }}
      >
        <h3 className='form-heading'>Login</h3>
        <div className='label-input'>
          <label htmlFor='login-username'>Username:</label>
          <input
            type='text'
            name='username'
            id='login-username'
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className='label-input'>
          <label htmlFor='login-password'>Password:</label>
          <input
            type='password'
            name='password'
            id='login-password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className='login-buttons'>
          <button className='login-button login-submit'>Submit</button>
          <Link to='/register' className=' login-button login-register'>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
