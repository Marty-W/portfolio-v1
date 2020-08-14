import React from 'react';
import styled from 'styled-components';
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

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: repeat(3, 100vh);
  grid-template-areas:
    '. landing .'
    '. work .'
    '. contact .';
  scroll-snap-type: y mandatory;

  @media (min-width: 650px) {
    grid-template-columns: 2rem 1fr 2rem;
  }
`;

export default App;
