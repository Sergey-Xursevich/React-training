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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxID = 4;
    this.state = {
      data: [
        { label: 'Going to learn React', id: 1 },
        { label: 'That is so good', id: 2 },
        { label: 'I need a brake...', id: 3 },
      ],
    };
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newPost = {
      label: body,
      important: false,
      id: this.maxID++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newPost];

      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <Block>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDeleted={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </Block>
    );
  }
}
