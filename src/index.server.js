import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reducer from './store/reducer';

import routes from './routes';

import './index.css';

injectTapEventPlugin();

const root = process.cwd();
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export const handleRender = (req, res) => {
  match({ routes: routes(), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <MuiThemeProvider>
            <RouterContext {...renderProps}/>
          </MuiThemeProvider>
        </Provider>);
      let document = fs.readFileSync(`${root}/build/index.html`, 'utf8');
      document = document.replace(`/<div id="root"></div>/`,
        `<div id="root">${html}</div><script>window.__REDUX_STATE__ = ${JSON.stringify(store.getState())}</script>`);
      res.status(200).send(document);
    } else {
      res.status(404).send('Not found');
    }
  });
};
