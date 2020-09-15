import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';

import Layout from './layout/Layout';
import SideBar from './layout/SideBar';
import Login from './screens/Login';
import Register from './screens/Register';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
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
    history.push('/');
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    setCurrentUser(null);
    history.push('/');
  };

  return (
    <div className='App'>
      <Layout>
        <div className='all-not-nav'>
          <SideBar currentUser={currentUser} handleLogout={handleLogout} />
          <Switch>
            <Route path='/login'>
              <Login loginSubmit={loginSubmit} />
            </Route>
            <Route path='/register'>
              <Register registerSubmit={registerSubmit} />
            </Route>
            <Route path='/'>
              <MainContainer currentUser={currentUser} />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
