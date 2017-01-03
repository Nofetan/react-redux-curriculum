import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reducer from './store/reducer';

import routes from './routes';

import './index.css';

injectTapEventPlugin();

const initialState = window.__REDUX_STATE__;
const store = createStore(reducer, initialState, applyMiddleware(promiseMiddleware));

match({ history: browserHistory, routes: routes() }, (error, redirectLocation, renderProps) => {
  ReactDOM.render((
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={browserHistory} {...renderProps}/>
      </MuiThemeProvider>
    </Provider>
  ), document.getElementById('root'));
});
