import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Hero from './components/Hero';

const App = () => (
  <HeroWrapper>
    <Nav />
    <Hero />
  </HeroWrapper>
);

export default App;

const HeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  display: grid;
  grid-template-rows: 8vh 1fr;
  grid-template-areas:
    'nav'
    'hero';
`;
