import React, { useState } from 'react';
import './styles/App.css';
import './components/PostItem';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton.module.css';
import MyInput from './components/UI/input/MyInput.module.css';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript1', body: 'Discription' },
    { id: 2, title: 'Javascript2', body: 'Discription' },
    { id: 3, title: 'Javascript3', body: 'Discription' },
  ]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostList posts={posts} title="Список постов" remove={removePost} />
    </div>
  );
}
export default App;
