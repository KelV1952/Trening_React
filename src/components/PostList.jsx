import React from 'react';
import PostItem from './PostItem';
import '../styles/App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove, title }) => {
  // if (!posts.length) {
  //   return <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>;
  // }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} className="post">
            <PostItem post={post} number={index + 1} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
