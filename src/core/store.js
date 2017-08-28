import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import detector from 'detector';

import reducer from './reducers';
import CONFIG from 'build/config/client.conf';

const store = '';

export default store;
