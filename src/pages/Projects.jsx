import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../assets/Logo.svg';
import { GiSwissArmyKnife } from 'react-icons/gi';
import { IoIosTimer } from 'react-icons/io';
import { BsListTask } from 'react-icons/bs';
import { AiOutlineRedo } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import Button from '../components/Button';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { ArrowWrapper } from './Hero';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import Gallery from '../components/Gallery';

const Projects = () => {
  const [isModalOpen, toggleModal] = useModal();
  return (
    <Wrapper id='work'>
      <Logo />
      <ProjectDesc>
        <h2>Swiss Knife</h2>
        <p>
          Productivity app with authentication and cloud db powered by Firebase.
          Built in React + Typescript. Styled with Styled Components.
        </p>
        <GiSwissArmyKnife />
      </ProjectDesc>
      <Stack>
        <h3>Stack</h3>
        <p>React, Typescript, Firebase, Styled Components, Framer Motion</p>
      </Stack>
      <Features>
        <h3>Features</h3>
        <Feature>
          <IoIosTimer />
          <span>Pomodoro</span>
        </Feature>
        <Feature>
          <BsListTask />
          <span>Todo list</span>
        </Feature>
        <Feature>
          <AiOutlineRedo />
          <span>Habits</span>
        </Feature>
        <Feature>
          <FiUserCheck />
          <span>Auth</span>
        </Feature>
      </Features>
      <ButtonWrapper>
        <Button as='a' href='https://swissknife.tech' target='_blank'>
          Live
        </Button>
        <Button
          as='a'
          href='https://github.com/Marty-W/swiss-knife'
          target='_blank'>
          Code
        </Button>
        <Button onClick={() => toggleModal()}>Gallery</Button>
      </ButtonWrapper>
      <Arrow>
        <span>contact</span>
        <AiOutlineArrowDown />
      </Arrow>
      <Modal isShowing={isModalOpen} hide={toggleModal}>
        <Gallery />
      </Modal>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  scroll-snap-align: start;
  grid-area: work;
  display: grid;
  grid-template-columns: 1rem 1fr 1fr 1rem;
  grid-template-rows: 7vh 35vh 0.4fr 30vh;
  grid-row-gap: 1rem;
  grid-template-areas:
    '. logo logo .'
    'projectDesc projectDesc projectDesc projectDesc'
    '. stack stack .'
    '. features btns .'
    '. arrow arrow .';
`;

export const Logo = styled(LogoSVG)`
  grid-area: logo;
  width: 1.8rem;
  height: 1.8rem;
  place-self: center;
`;

const ProjectDesc = styled.div`
  margin: 0 -1rem;
  grid-area: projectDesc;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primary};
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  line-height: 1.4;

  & h2 {
    font-weight: bold;
    font-size: 2.3rem;
    grid-column: 1 / -1;
  }

  & p {
    grid-column: 1 / span 1;
  }

  & svg {
    align-self: center;
    justify-self: end;
    transform: rotate(-45deg);
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 650px) {
    margin: 0 -2rem;
  }
`;

const Stack = styled.div`
  grid-area: stack;

  & h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  & p {
    font-size: 0.9rem;
  }
`;

const Features = styled.div`
  grid-area: features;
  align-self: start;
  justify-self: start;
  display: flex;
  height: 100%;
  flex-direction: column;

  & h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  & div {
    margin-bottom: 1rem;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  grid-area: btns;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  & button {
    width: 80%;
    margin-bottom: 0.5rem;
  }
  & a {
    width: 80%;
    text-align: center;
    font-family: inherit;
  }
`;

const Arrow = styled(ArrowWrapper)`
  justify-self: center;
  align-items: center;
`;
