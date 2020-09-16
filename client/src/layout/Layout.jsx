import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser } from '../services/auth';

export default function Layout(props) {
  const { setFromCreate } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  };
  handleVerify();

  return (
    <div>
      <img src='' />
      <Link to='/'><span>TenForward</span></Link>
      {currentUser ? (
        <Link to='/posts/create'>
          <button>Create Post</button>
        </Link>
      ) : (
        <Link to='/login'>
          <button onClick={()=>setFromCreate(true)}>Create Post</button>
        </Link>
      )}
      <hr />
      <main>{props.children}</main>
    </div>
  );
}
