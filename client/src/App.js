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
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [fromCreate, setFromCreate] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      // history.push('/');
    };
    handleVerify();
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    fromCreate ? history.push('/posts/create') : history.push('/');
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    fromCreate ? history.push('/posts/create') : history.push('/');
  };

  const updateProfileSubmit = async (userId, formData) => {
    const userData = await updateUser(userId, formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    setCurrentUser(null);
    history.push('/');
  };

  // console.log('currentUser in App.js is '+currentUser)

  return (
    <div className='app' style={{ backgroundImage: `url(${stars})` }}>
      <Layout
        setFromCreate={setFromCreate}
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <div className='all-not-nav'>
          <SideBar currentUser={currentUser} handleLogout={handleLogout} />
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
              />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
