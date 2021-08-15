import React from 'react';
import styled from "styled-components";
// import MbtiStart from './pages/MbtiStart';
import Questioin from './pages/Question';
import img from './travel.jpg';
import { HashRouter, Route } from 'react-router-dom';

const BackStyle =  styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover;
`;

const App = () => {
  return (
      <BackStyle>
        <HashRouter>
          {/* <Route path="/" component={MbtiStart} /> */}
          <Route path="/start" component={Questioin} />
        </HashRouter>
      </BackStyle>
  );
}

export default App;