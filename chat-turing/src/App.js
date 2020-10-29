import React from 'react';
import Router from './components/Router';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: lightgray;
  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Router />
    </AppWrapper>
  );
}

export default App;
