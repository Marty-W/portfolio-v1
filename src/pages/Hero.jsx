import React from 'react';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import Nav from '../components/Nav';
import HeroPng from '../assets/hero.svg';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Hero = () => {
  return (
    <Wrapper>
      <Nav />
      <Header>Hi, I'm Martin.</Header>
      <SubHeader>front-end dev, looking for a job</SubHeader>
      <HeroImg src={HeroPng} />
      <BtnWrapper>
        <Button primary>Hire me</Button>
        <Button>My work</Button>
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
  height: 100vh;
  grid-column: 2 / span 1;
  display: grid;
  grid-template-rows: 10vh 3rem 4rem 50vh 1fr;
  grid-template-columns: 1rem 1fr 1fr 1rem;
  grid-row-gap: 1rem;
  grid-template-areas:
    '. nav nav .'
    '. header header .'
    '. subheader . .'
    '. hero hero .'
    '. btns arrow .';
  text-align: center;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.colors.accent};
  grid-area: header;
  font-weight: bold;
  align-self: flex-end;
  font-size: 2.5rem;
  justify-self: start;
  align-self: end;
`;

const SubHeader = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  grid-area: subheader;
  font-size: 1.3rem;
  display: block;
  justify-self: start;
  text-align: left;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  grid-area: btns;

  & button {
    margin-bottom: 1rem;
  }
`;

const HeroImg = styled.img`
  grid-area: hero;
  align-self: center;
`;

export const ArrowWrapper = styled.div`
  grid-area: arrow;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;

  & span {
    font-size: 1.3rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
