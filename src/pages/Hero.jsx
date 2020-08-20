import React from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import Nav from '../components/Nav';
import HeroSVG from '../components/HeroSVG';
import HeroImg from '../assets/hero.webp';
import { motion, useTransform } from 'framer-motion';
import Arrow from '../components/Arrow';

const Hero = ({ progress }) => {
  const scrollRange = [0, 0.5];
  const scrollOpacity = useTransform(progress, scrollRange, [1, 0]);
  const animateLeft = useTransform(progress, scrollRange, [0, -400]);
  const animateRight = useTransform(progress, scrollRange, [0, 400]);
  return (
    <Wrapper style={{ opacity: scrollOpacity }}>
      <Nav />
      <Header style={{ x: animateRight }}>Hi, I'm Martin.</Header>
      <SubHeader style={{ x: animateRight }}>
        front-end dev, looking for a job
      </SubHeader>
      <HeroWrapper
        style={{ x: animateLeft }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}>
        <img src={HeroImg} alt='hero' />
        <HeroSVG />
      </HeroWrapper>
      <BtnWrapper style={{ x: animateRight }}>
        <Button primary href='#contact'>
          Hire me
        </Button>
        <Button href='#work'>My work</Button>
      </BtnWrapper>
      <Arrow text='latest work' />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled(motion.div)`
  grid-area: landing;
  display: grid;
  grid-template-rows: 10vh 1fr 0.3fr 1fr 0.7fr 0.4fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  grid-template-areas:
    'nav nav'
    'header header'
    'subheader subheader'
    'hero hero'
    'btns btns'
    'arrow arrow';
  text-align: center;

  @media (min-width: 800px) {
    grid-template-rows: 10vh 1fr 1fr 0.5fr 0.7fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    grid-template-areas:
      'nav nav'
      '. .'
      'hero header'
      'hero subheader'
      'hero btns'
      'arrow arrow';
  }
`;

const Header = styled(motion.h1)`
  color: ${(props) => props.theme.colors.accent};
  grid-area: header;
  font-weight: bold;
  font-size: 2.5rem;
  justify-self: center;
  align-self: end;

  @media (min-width: 800px) {
    justify-self: start;
  }

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const SubHeader = styled(motion.h2)`
  color: ${(props) => props.theme.colors.tertiary};
  grid-area: subheader;
  align-self: center;
  font-size: 1.3rem;

  @media (min-width: 800px) {
    justify-self: start;
  }

  @media (min-width: 1000px) {
    font-size: 1.8rem;
  }
`;

const BtnWrapper = styled(motion.div)`
  grid-area: btns;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    margin: 1rem;
  }

  @media (min-width: 800px) {
    place-self: start;
    justify-content: start;

    & a {
      margin: 0 1rem 0 0;
    }
  }
`;

const HeroWrapper = styled(motion.div)`
  grid-area: hero;
  place-self: center;
  max-width: 300px;
  position: relative;

  & svg {
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 4rem;
  }

  @media (min-width: 1000px) {
    max-width: 550px;
    & svg {
      padding: 8rem;
    }
  }
`;
