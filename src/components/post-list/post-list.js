import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { label, id } = item;

    return (
        <PostListItem key={id} label={label} />

    );
  });

  return (
      <ul className="app-list list-group">
        {elements}
      </ul>
  );
};

export default PostList;
