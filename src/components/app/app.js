import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';

const Block = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const App = () => {
  const data = [
    { label: 'Going to learn React', id: '1' },
    { label: 'That is so good', id: '2' },
    { label: 'I need a brake...', id: '3' },
  ];

  return (
    <Block>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </Block>
  );
};

export default App;
