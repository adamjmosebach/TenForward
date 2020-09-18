import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {
  getAllPosts,
  postPost,
  updatePost,
  deletePost,
} from '../services/posts';
import CreatePost from '../screens/CreatePost';
import Posts from '../screens/Posts';
import EditPost from '../screens/EditPost';
import DetailPost from '../screens/DetailPost';
import EditProfile from '../screens/EditProfile';
import './MainContainer.css';

export default function MainContainer(props) {
  const { currentUser, setFromCreate, updateProfileSubmit } = props;
  const [posts, updatePosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsArr = await getAllPosts();
      updatePosts(postsArr);
    };
    fetchPosts();
  }, []);

  const createPostSubmit = async (formData) => {
    const newPost = await postPost(formData);
    updatePosts((prevPosts) => [...prevPosts, newPost]);
    history.push('/posts');
  };

  const editPostSubmit = async (id, formData) => {
    const updatedPost = await updatePost(id, formData);
    updatePosts((prevPosts) =>
      prevPosts.map((post) => (post.id === Number(id) ? updatedPost : post))
    );
    history.push('/posts');
  };

  const deletePostSubmit = async (id) => {
    console.log('id in deletePostSubmit = ', id);
    const deleteStatus = await deletePost(id);
    updatePosts((prevPosts) => prevPosts.filter((post) => post.id != id));
    console.log(deleteStatus);
    history.push('/posts');
  };

  return (
    <div className='main-container'>
      <h2>Main Container</h2>
      <Switch>
        <Route path='/posts/create'>
          <CreatePost
            setFromCreate={setFromCreate}
            currentUser={currentUser}
            createPostSubmit={createPostSubmit}
          />
        </Route>
        <Route path='/posts/:id/edit'>
          <EditPost
            currentUser={currentUser}
            editPostSubmit={editPostSubmit}
            deletePostSubmit={deletePostSubmit}
          />
        </Route>
        {/* <Route path='/posts/:id/comments/create'>
          <CreateComment />
        </Route> */}
        <Route path='/posts/:id'>
          <DetailPost currentUser={currentUser} />
        </Route>
        <Route path='/users/:id'>
          <EditProfile
            currentUser={currentUser}
            updateProfileSubmit={updateProfileSubmit}
          />
        </Route>

        <Route path='/'>
          <Posts posts={posts} currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}
