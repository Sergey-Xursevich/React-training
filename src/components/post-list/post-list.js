import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({ posts, onDeleted }) => {
  const elements = posts.map((item) => {
    const { label, id } = item;

    return (
      <PostListItem key={id} label={label} onDelete={() => onDeleted(id)} />

    );
  });

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  );
};

export default PostList;
