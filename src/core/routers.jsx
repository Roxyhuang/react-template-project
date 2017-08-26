import React from 'react';
import { applyRouterMiddleware, Router, IndexRedirect, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

import store from './store';
