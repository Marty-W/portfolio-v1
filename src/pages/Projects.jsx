import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoSVG } from '../assets/Logo.svg';
import { GiSwissArmyKnife } from 'react-icons/gi';
import { IoIosTimer } from 'react-icons/io';
import { BsListTask } from 'react-icons/bs';
import { AiOutlineRedo } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import Button from '../components/Button';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import Gallery from '../components/Gallery';
import Arrow from '../components/Arrow';
import { motion, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Projects = ({ progress }) => {
  const [isModalOpen, toggleModal] = useModal();
  const scrollRange = [0, 0.5, 1];
  const scrollOpacity = useTransform(progress, scrollRange, [0, 1, 0]);

  useEffect(() => {
    console.log(progress.get());
  }, [progress]);

  return (
    <Wrapper id='work' style={{ opacity: scrollOpacity }}>
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
        <Button
          primary
          href='https://swissknife.tech'
          target='_blank'
          rel='noopener noreferrer'>
          Live
        </Button>
        <Button
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/Marty-W/swiss-knife'>
          Code
        </Button>
        <Button onClick={() => toggleModal()} className='gallery'>
          Gallery
        </Button>
      </ButtonWrapper>
      <Arrow text='contact' />
      <GalleryWrapper>
        <Gallery />
      </GalleryWrapper>
      <Modal isShowing={isModalOpen} hide={toggleModal}>
        <Gallery />
      </Modal>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled(motion.div)`
  grid-area: work;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 7vh 35vh 0.4fr 25vh 1fr;
  grid-row-gap: 1.5rem;
  grid-template-areas:
    'logo logo'
    'projectDesc projectDesc'
    'stack stack'
    'features btns'
    'arrow arrow';

  @media (min-width: 550px) {
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 7vh 1.5fr 1.5fr repeat(3, 1fr);
    grid-template-areas:
      'logo logo'
      'projectDesc projectDesc'
      'features features'
      'stack stack'
      'btns btns'
      'arrow arrow';
  }

  @media (min-width: 850px) {
    grid-template-areas:
      'logo logo'
      'gallery projectDesc'
      'gallery features'
      'gallery stack'
      'gallery btns'
      'arrow arrow';

    grid-column-gap: 3rem;
  }
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
  padding: 1rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  line-height: 1.4;

  & h2 {
    font-weight: bold;
    font-size: 2.3rem;
    grid-column: 1 / span 1;
    align-self: center;
  }

  & p {
    grid-column: 1 / span 1;
  }

  & svg {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
    place-self: center;
    transform: rotate(-45deg);
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 650px) {
    margin: 0 -2rem;
    padding: 0 2rem;
  }

  @media (min-width: 850px) {
    margin: 0;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 0;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & h3 {
    font-size: 1.4rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
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
  justify-content: space-around;
  align-items: center;

  & a,
  & button {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 550px) {
    flex-direction: row;
    align-items: center;
    & a,
    & button {
      width: 25%;
    }
  }

  @media (min-width: 850px) {
    width: 80%;
    justify-self: start;
    justify-content: start;
    & .gallery {
      display: none;
    }

    & a,
    & button {
      width: 30%;
      max-width: 150px;
    }
  }
`;

const GalleryWrapper = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: block;
    grid-area: gallery;
  }
`;
