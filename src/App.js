import React, { useState } from 'react';
import './styles/App.css';
import './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput.module.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'cJavascript1', body: 'cDiscription' },
    { id: 2, title: 'bJavascript2', body: 'bDiscription' },
    { id: 3, title: 'fJavascript3', body: 'aDiscription' },
  ]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    query: '',
    sort: '',
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // const sortedPosts = useMemo(() => {
  //   if (filter.sort) {
  //     return [...posts].sort((a, b) =>
  //       a[filter.sort].localeCompare(b[filter.sort])
  //     );
  //   }
  //   return posts;
  // }, [filter.sort, posts]);

  // const sortedAndSearchedPosts = useMemo(() => {
  //   return sortedPosts.filter((post) =>
  //     post.title.toLowerCase().includes(filter.query.toLowerCase())
  //   );
  // }, [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать новый пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

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
