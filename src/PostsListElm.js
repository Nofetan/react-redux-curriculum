import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';


class PostsListElm extends Component {
  handleRoute = (value) => {
    this.context.router.push(`/posts/${value}`);
  };

  render() {
    return (
      <ListItem
        onClick={() => this.handleRoute(this.props.post.id)}
        leftAvatar={<span>{this.props.post.id}</span>}
        primaryText={this.props.post.title}
        secondaryText={`user${this.props.post.userId}`}
      />
    );
  }
}

PostsListElm.contextTypes = {
  router: React.PropTypes.object,
};

PostsListElm.propTypes = {
  post: React.PropTypes.object,
};

export default PostsListElm;
