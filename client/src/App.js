import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';

import Layout from './layout/Layout';
import SideBar from './layout/SideBar';
import stars from './assets/Hyades.jpg';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
  updateUser,
} from './services/auth';
import { getOneUser } from './services/users';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [postsNum, setPostsNum] = useState(0);
  const [fromCreate, setFromCreate] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      if (userData) {
        const userDataPlusPosts = await getOneUser(userData.id);
        setCurrentUser(userDataPlusPosts);
      } else {
        setCurrentUser(userData);
      }
      // history.push('/');
    };
    handleVerify();
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.posts) {
      setPostsNum(currentUser.posts.length);
    }
  }, [currentUser]);

  // useEffect(() => {
  //   console.log('postsNum in App.js = ',postsNum)
  // }, [postsNum])

  const loginSubmit = async (loginData) => {
    try {
      const userData = await loginUser(loginData);
      console.log('llll', userData);
      // if (userData) {
      const userDataPlusPosts = await getOneUser(userData.id);
      setCurrentUser(userDataPlusPosts);
      fromCreate ? history.push('/posts/create') : history.push('/');
    } catch (err) {
      // } else {
      //   alert('Login Failed')
      // }
      alert(err)
    }
  };

  const registerSubmit = async (registerData) => {
    try {
      const userData = await registerUser(registerData);
      const userDataPlusPosts = await getOneUser(userData.id);
      setCurrentUser(userDataPlusPosts);
      fromCreate ? history.push('/posts/create') : history.push('/');
    } catch (err) {
      alert(err)
    }
  };

  const updateProfileSubmit = async (userId, formData) => {
    try {
      const userData = await updateUser(userId, formData);
      setCurrentUser(userData);
      history.push('/');
    } catch (err) {
      alert(err)
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    setCurrentUser(null);
    history.push('/');
  };

  return (
    <div className='app' style={{ backgroundImage: `url(${stars})` }}>
      <Layout
        setFromCreate={setFromCreate}
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <div className='all-not-nav'>
          <SideBar
            currentUser={currentUser}
            postsNum={postsNum}
            handleLogout={handleLogout}
          />
          <div className='allow-for-sidebar'></div>
          <Switch>
            {/* <Route path='/login'>
              <Login loginSubmit={loginSubmit} />
            </Route>
            <Route path='/register'>
              <Register registerSubmit={registerSubmit} />
            </Route> */}
            <Route path='/'>
              <MainContainer
                currentUser={currentUser}
                setFromCreate={setFromCreate}
                updateProfileSubmit={updateProfileSubmit}
                loginSubmit={loginSubmit}
                registerSubmit={registerSubmit}
                setPostsNum={setPostsNum}
                postsNum={postsNum}
              />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
