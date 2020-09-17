import React, { useState, useEffect } from 'react';

export default function EditProfile(props) {
  const { currentUser, updateProfileSubmit } = props;

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    img_url: '',
    division: '',
    rank: '',
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
        img_url: currentUser.img_url,
        division: currentUser.division,
        rank: currentUser.rank,
      });
    }
  }, [currentUser]);

  // const [passwordConfirm, setPasswordConfirm] = useState('');
  const { username, email, password, img_url, division } = formData;
  // const { username, email, img_url, division } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handlePWConfirm = e => {
  //   setPasswordConfirm(e.target.value);
  // };

  if (currentUser) {
    return (
      <div>
        <h2>Edit Profile</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateProfileSubmit(currentUser.id, formData);
          }}
        >
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
            <input
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          
          {/* <label>
          Password Confirm:
          <input
            type='password'
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={e => handlePWConfirm(e)}
          />
        </label> */}
          <label>
            Image URL
            <input
              type='text'
              name='img_url'
              value={img_url}
              onChange={handleChange}
            />
          </label>
          <label>
            Division
            <select
              name='division'
              id='division'
              value={division}
              onChange={handleChange}
            >
              <option value='' disabled>
                --Select Division--
              </option>
              <option value='command'>Command</option>
              <option value='operations'>Operations</option>
              <option value='science'>Science</option>
            </select>
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <button>Update</button>
        </form>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
