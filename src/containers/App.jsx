import React from 'react';
import Container from './components/Container';
import errorHandler from '../core/utils/errorHandler';
import sty from './App.scss';

const App = (props) => {
  errorHandler.initRouter(props.router);
  return <Container className={sty.placeholder} router={props.router}>{props.children}</Container>;
};

export default App;
