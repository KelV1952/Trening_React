import React, { useState, useMemo } from 'react';
import './styles/App.css';
import './components/PostItem';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton.module.css';
// import MyInput from './components/UI/input/MyInput.module.css';
import PostForm from './components/PostForm';
// import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'cJavascript1', body: 'cDiscription' },
    { id: 2, title: 'bJavascript2', body: 'bDiscription' },
    { id: 3, title: 'fJavascript3', body: 'aDiscription' },
  ]);

  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({
    query: '',
    sort: '',
  });

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    console.log('working function SortedPosts');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов"
          remove={removePost}
        />
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
        </div>
      )}
    </div>
  );
}
export default App;
