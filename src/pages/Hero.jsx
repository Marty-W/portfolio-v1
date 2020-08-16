import React from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import Nav from '../components/Nav';
import { AiOutlineArrowDown } from 'react-icons/ai';
import HeroSVG from '../components/HeroSVG';

const Hero = () => {
  return (
    <Wrapper>
      <Nav />
      <Header>Hi, I'm Martin.</Header>
      <SubHeader>front-end dev, looking for a job</SubHeader>
      <HeroImg>
        <HeroSVG />
      </HeroImg>
      <BtnWrapper>
        <a href='#contact'>
          <Button primary>Hire me</Button>
        </a>
        <a href='#work'>
          <Button>My work</Button>
        </a>
      </BtnWrapper>
      <ArrowWrapper>
        <span>latest work</span>
        <AiOutlineArrowDown />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  scroll-snap-align: center;
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
    '. arrow';
  text-align: center;

  @media (min-width: 800px) {
    grid-template-rows: 10vh 1fr 1fr 0.5fr 0.7fr 1fr;
    grid-template-columns: 1fr 0.8fr;
    grid-column-gap: 3rem;
    grid-template-areas:
      'nav nav'
      '. .'
      'hero header'
      'hero subheader'
      'hero btns'
      '. arrow';
  }
`;

const Header = styled.h1`
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

const SubHeader = styled.h2`
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

const BtnWrapper = styled.div`
  grid-area: btns;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 1rem;
  }

  @media (min-width: 800px) {
    place-self: start;
    justify-content: start;

    & button {
      margin: 0 1rem 0 0;
    }
  }
`;

const HeroImg = styled.div`
  grid-area: hero;
  place-self: center;
  max-width: 360px;

  @media (min-width: 1000px) {
    max-width: 550px;
  }
`;

export const ArrowWrapper = styled.div`
  grid-area: arrow;
  align-self: center;
  display: flex;
  justify-content: end;
  align-items: center;

  & span {
    font-size: 1.3rem;
    margin-right: 1rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
