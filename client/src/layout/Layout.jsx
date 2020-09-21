import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import TenForwardBanner from '../assets/TenForwardBanner.png';

export default function Layout(props) {
  const { setFromCreate, currentUser, handleLogout } = props;

  return (
    <>
      <div className='nav'>
        <Link to='/'>
          <img
            src={TenForwardBanner}
            className='tenforward-banner'
            alt='TenForward Banner'
          />
        </Link>
        <div className='layout-button-corner'>
          {currentUser ? (
            <>
              <Link to='/posts/create'>
                <button className='create-post-button'>Create Post</button>
              </Link>
              <div className='layout-profile-buttons'>
                <Link to={`/users/${currentUser.id}`} className='layout-profile-links'>
                  <button className='layout-profile-button layout-prof-edit'>
                    Edit Profile
                  </button>
                </Link>
                <button
                  className='layout-profile-button layout-prof-logout'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button
                  className='create-post-button'
                  onClick={() => setFromCreate(true)}
                >
                  Create Post
                </button>
              </Link>
              <div className='layout-guinan-buttons'>
                <Link to='/login'>
                  <button className='layout-guinan-button guinan-login'>
                    Login
                  </button>
                </Link>
                <Link to='/register'>
                  <button className='layout-guinan-button'>Register</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <main>{props.children}</main>
    </>
  );
}
