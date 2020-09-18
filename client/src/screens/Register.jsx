import React, { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    imgUrl: '',
    division: '',
    rank: 'cadet',
  });
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { username, email, password, imgUrl} = formData;

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
      onSubmit={(e) => {
        e.preventDefault();
        if (passwordConfirm === password) {
          props.registerSubmit(formData);
        } else {
          alert ('Passwords do not match')
        }
      }}
    >
      <h3>Register</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <label>
        Password Confirm:
        <input
          type='password'
          name='passwordConfirm'
          value={passwordConfirm}
          onChange={(e) => handlePWConfirm(e)}
        />
      </label>
      <label>
        Image URL
        <input
          type='text'
          name='imgUrl'
          value={imgUrl}
          onChange={handleChange}
        />
      </label>
      <label>
        Division
        <select name='division' id='division' onChange={handleChange}>
          <option value='' disabled selected>--Select Division--</option>
          <option value='command'>Command</option>
          <option value='operations'>Operations</option>
          <option value='science'>Science</option>
        </select>
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
