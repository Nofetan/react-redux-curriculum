import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object,
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.post.data[ownProps.params.id],
  };
}

export default connect(mapStateToProps)(Post);
