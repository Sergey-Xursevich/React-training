import React from 'react';
import './post-list-item.css';

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { important: false, like: false };
    this.onImportant = this.onImportant.bind(this);
    // this.onLike = (state) => ({
    //   like: !state.like,
    // });
  }

  onImportant() {
    this.setState((state) => ({
      important: !state.important,
    }));
  }

  onLike = () => {
    this.setState((state) => ({
      like: !state.like,
    }));
  }

  render() {
    const { label } = this.props;
    let nameClass = 'app-list-item d-flex justify-content-between';
    if (this.state.important) {
      nameClass += ' important';
    }
    if (this.state.like) {
      nameClass += ' like';
    }

    return (
      <div className={nameClass} onClick={this.onLike}>
        <span className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fa fa-star" />
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}

export default PostListItem;
