import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import guinan from '../assets/guinan.jpg';
import lcarsCommunique from '../assets/lcarsCommunique.gif';

export default function SideBar(props) {
  const { currentUser } = props;
  return (
    <div className='side-bar'>
      {/* <h2>Side Bar</h2> */}
      {currentUser ? (
        <>
          <div className='lcars'>
            <div className='lcars-top-div'>
              <div className='lcars-top lcars-top-1'></div>
              <div className='lcars-top lcars-top-2'></div>
              <div className='lcars-top lcars-top-3'></div>
              <div className='lcars-top lcars-top-4'></div>
              <div className='lcars-top lcars-top-5'></div>
              <div className='lcars-top lcars-top-6'></div>
            </div>
            <div className='side-bar-main'>
              <div className='profile-info'>
                <p className='profile-name'>{currentUser.username}</p>
                <p className='profile-stats'>Rank: {currentUser.rank}</p>
                <p className='profile-stats'>
                  Division: {currentUser.division}
                </p>
                <div className='profile-image-container'>
                  <img
                    src={currentUser.img_url}
                    alt="user's profile"
                    className='profile-image'
                  />
                </div>
                <div className='profile-buttons'>
                  <Link to={`/users/${currentUser.id}`}>
                    <button className='profile-button prof-edit'>
                      Edit Profile
                    </button>
                  </Link>
                  <button
                    className='profile-button prof-logout'
                    onClick={props.handleLogout}
                  >
                    Logout
                  </button>
                </div>
                <img
                  src={lcarsCommunique}
                  className='lcars-communique'
                  alt='Federation of Planets Communique'
                />
              </div>
            </div>
          </div>
          <div className='lcars-side-div'>
            <div className='lcars-side lcars-side-1'></div>
            <div className='lcars-side lcars-side-1a'></div>
            <div className='lcars-side lcars-side-2'></div>
            <div className='lcars-side lcars-side-3'></div>
            <div className='lcars-side lcars-side-4'></div>
            <div className='lcars-side lcars-side-5'></div>
            <div className='lcars-side lcars-side-6'></div>
            <div className='lcars-side lcars-side-7'></div>
          </div>
        </>
      ) : (
        <div className='guinan-landing'>
          <Link to='/login'>
            <button className='sidebar-guinan-button'>Login</button>
          </Link>
          <Link to='/register'>
            <button className='sidebar-guinan-button'>Register</button>
          </Link>
          <p className='welcome'>"Welcome"</p>
          <img src={guinan} alt='guinan' className='guinan-pic' />
        </div>
      )}
    </div>
  );
}
