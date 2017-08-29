import React from 'react';
import Container from './components/Container';
import errorHandler from '../core/utils/errorHandler';
import g from './App.scss';

const App = (props) => {
  errorHandler.initRouter(props.router);
  return <Container className={g.placeholder} router={props.router}>{props.children}</Container>;
};

export default App;
