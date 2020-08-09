import React from 'react';
import styled from 'styled-components/macro';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => (
  <BodyWrapper>
    <Hero />
    <Projects />
    <Contact />
  </BodyWrapper>
);

export default App;

const BodyWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;
