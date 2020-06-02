import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from "reactstrap";

import './post-list.css';

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { label, id } = item;

    return (
        <PostListItem key={id} label={label} />

    );
  });

  return (
      <ListGroup className="app-list">
        {elements}
      </ListGroup>
  );
};

export default PostList;
