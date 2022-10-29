import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove, title }) => {
  if (!posts) {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} number={index + 1} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
