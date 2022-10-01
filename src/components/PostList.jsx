import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, remove, title }) => {
  return (
    <div>
      <p>
        <h2 style={{ textAlign: 'center' }}>{title}</h2>
      </p>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default PostList;
