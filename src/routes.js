import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './App';
import Greetings from './Greetings';
import PostsList from './PostsList';
import Post from './Post';

export default () => (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings}/>
    <Route path="posts" component={PostsList}/>
    <Route path="posts/:id" component={Post}/>
  </Route>
)