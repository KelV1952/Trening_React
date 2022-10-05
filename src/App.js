import React, { useState } from 'react';
import './styles/App.css';
import './components/PostItem';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton.module.css';
// import MyInput from './components/UI/input/MyInput.module.css';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'cJavascript1', body: 'cDiscription' },
    { id: 2, title: 'bJavascript2', body: 'bDiscription' },
    { id: 3, title: 'fJavascript3', body: 'aDiscription' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortPosts = (sort) => {
    console.log(sort);
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка "
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList posts={posts} title="Список постов" remove={removePost} />
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
        </div>
      )}
    </div>
  );
}
export default App;
