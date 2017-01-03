import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';

import logo from './logo.svg';
import './App.css';


const style = {
  container: {
    width: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    textAlign: 'center',
  },
  button: {
    margin: 6,
  },
  content: {
    marginTop: 12,
    padding: 6,
  }
};

class App extends Component {
  handleRoute = (value) => {
    this.context.router.push(value);
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.header}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>게시물 뷰어</h2>
          <RaisedButton style={style.button} primary onClick={() => this.handleRoute('/')} label="홈"/>
          <RaisedButton style={style.button} primary onClick={() => this.handleRoute('/posts')} label="포스트 리스트"/>
        </div>
        <Card style={style.content}>
          {this.props.children}
        </Card>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

export default App;
