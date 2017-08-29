import React from 'react';
import { applyRouterMiddleware, Router, IndexRedirect, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

import App from '../containers/App';

import store from '../core/store';

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Router history={history} key={Math.random()} render={applyRouterMiddleware(useScroll())}>
    <Redirect from="/index.html" to="/" />
    <Route path="/" component={App} />
  </Router>
);

export default routes;
