import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPosts } from '../services/posts';
import CreatePost from '../screens/CreatePost';
import Posts from '../screens/Posts';
import EditPost from '../screens/EditPost';

export default function MainContainer(props) {
  const { currentUser, setFromCreate } = props;
  const [posts, updatePosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsArr = await getAllPosts();
      updatePosts(postsArr);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Main Container</h2>
      <Switch>
        <Route path='/posts/create'>
          <CreatePost setFromCreate={setFromCreate} />
        </Route>
        <Route path='/posts/:id/edit'>
          <EditPost />
        </Route>
        <Route path='/'>
          <Posts posts={posts} />
        </Route>
      </Switch>
    </div>
  );
}
