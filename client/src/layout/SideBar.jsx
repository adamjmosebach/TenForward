import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import guinan from '../assets/guinan.jpg';

export default function SideBar(props) {
  const { currentUser } = props;
  return (
    <div className='side-bar'>
      <h2>Side Bar</h2>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <p>Rank: {currentUser.rank}</p>
          <p>Division: {currentUser.division}</p>
          <div className='profile-image-container'>
            <img
              src={currentUser.img_url}
              alt="user's picture"
              className='profile-image'
            />
          </div>
          <button onClick={props.handleLogout}>logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/register'>
            <button>Register</button>
            </Link>
            <p>"Welcome"</p>
          <img src={guinan} alt='guinan' className='guinan-pic' />
        </div>
      )}
    </div>
  );
}
