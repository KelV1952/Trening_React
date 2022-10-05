import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  // const newPost = {
  //   title,
  //   body,
  //   id:Date.now()
  // }
  // create({...post,newPost})

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form className="form">
      <div>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          type="text"
          placeholder="Описание поста"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
      </div>

      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  );
};

export default PostForm;
