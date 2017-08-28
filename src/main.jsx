// This is a react entry
import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from '../src/core/store';
import routes from '../src/core/routers';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      {routes}
    </Provider>
  </AppContainer>, MOUNT_NODE,
);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./src/routes', () => {
    /* eslint-disable global-require */
    const nextRoutes = require('./src/routes').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          {nextRoutes}
        </Provider>
      </AppContainer>, MOUNT_NODE,
    );
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      /* eslint-disable no-param-reassign */
      link.href = link.href;
    });
  });
}
