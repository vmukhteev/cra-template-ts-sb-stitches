import React from 'react';
import './styles/index.scss';
import { styled } from './styles/config';

const Container = styled('div', {
  paddingTop: '$2',
  paddingLeft: '$2',
  fontSize: '$3',
});

const App = () => {
  return <Container className="App">Template</Container>;
};

export default App;
