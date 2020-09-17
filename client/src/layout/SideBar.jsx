import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar(props) {
  const { currentUser } = props;
  return (
    <div className='side-bar'>
      <h2>Side Bar</h2>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <p>Rank: {currentUser.rank}</p>
          <div className='profile-image-container'>
            <img src={currentUser.img_url} alt="user's picture" className='profile-image'/>
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
        </div>
      )}
    </div>
  );
}
