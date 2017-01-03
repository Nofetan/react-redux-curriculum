import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import PostsListElm from './PostsListElm';
import SearchForm from './SearchForm';

import { readPosts, initializePosts } from './store/action';


const style = {
  search: {
    textAlign: 'center',
  },
  readMore: {
    textAlign: 'center',
  },
};

class PostsList extends Component {
  componentWillMount() {
    this.props.readPosts(this.props.page, this.props.userId);
  }

  handleSearch = (values) => {
    this.props.initializePosts();
    this.props.readPosts(1, values.userId);
  }

  handleReadMore = () => {
    this.props.readPosts(this.props.page + 1, this.props.userId);
  }

  render() {
    return (
      <div>
        <div style={style.search}>
          <SearchForm onSubmit={this.handleSearch}/>
        </div>
        <List>
          {this.props.posts.map(post => <PostsListElm key={post.id} post={post}/>)}
        </List>
        <div style={style.readMore}>
          <RaisedButton onClick={this.handleReadMore} label="더 보기"/>
        </div>
      </div>
    );
  }
}

PostsList.propTypes = {
  page: React.PropTypes.number.isRequired,
  userId: React.PropTypes.string,
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  readPosts: React.PropTypes.func.isRequired,
  initializePosts: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    page: state.post.page,
    userId: state.post.userId,
    posts: Object.keys(state.post.data).map(key => state.post.data[key]),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    readPosts,
    initializePosts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
