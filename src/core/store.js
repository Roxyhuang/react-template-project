import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import detector from 'detector';

import reducer from './reducers';
import CONFIG from '../../build/config/client.conf';

// import errorHandler from './utils/errorHandler';

import GlobalInitialState from './reducers/global/globalInitialState';
import DeviceInitialState from './reducers/device/deviceInitialState';

import { setPlatform, setVersion } from './reducers/device/deviceActions';
import { setStore } from './reducers/global/globalActions';

const middlewares = [thunk, routerMiddleware(browserHistory)];

function getInitialState() {
  return {
    global: new GlobalInitialState(),
    device: new DeviceInitialState(),
  };
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(reducer, getInitialState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(setPlatform(
  {
    os: detector.os,
    device: detector.device,
    browser: detector.browser,
    engine: detector.engine,
    width: window.screen.availWidth ? window.screen.availWidth : window.screen.width,
    height: window.screen.availHeight ? window.screen.availHeight : window.screen.height,
  },
));

store.dispatch(setVersion(CONFIG.app.version));
store.dispatch(setStore(store));
// store.dispatch(getSessionToken());
// errorHandler.initStore(store);


export default store;
