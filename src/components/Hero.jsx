import React from 'react';
import styled from 'styled-components';
import Snow from '../assets/out.mp4';

const Hero = () => (
  <Wrapper>
    <HeroVid>
      <video autoPlay muted loop src={Snow} />
    </HeroVid>
    <Header>Hi, I'm Martin.</Header>
    <SubHeader>front-end dev, looking for a job</SubHeader>
  </Wrapper>
);

export default Hero;

const Wrapper = styled.div`
  grid-area: hero;
  display: grid;
  grid-template-columns: 2rem repeat(2, 1fr) 2rem;
  grid-template-rows: 0.4fr 1fr 1fr 0.4fr;
  grid-column-gap: 2rem;
  grid-template-areas:
    '. . . .'
    '. video header .'
    '. video subheader .'
    '. . . .';
`;

const Header = styled.h1`
  color: ${(props) => props.theme.colors.accent};
  grid-area: header;
  font-weight: bold;
  align-self: flex-end;
  font-size: 4rem;
`;

const SubHeader = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  grid-area: subheader;
  font-size: 2rem;
`;

const HeroVid = styled.div`
  grid-area: video;
  position: relative;

  & video {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: scale-down;

    z-index: 1;
  }
`;
