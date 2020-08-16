import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Projects';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Form from '../components/Form';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <Logo />
      <ContactWrapper>
        <span>Martin Weber</span>
        <a href='mailto:webermartin@seznam.cz'>webermartin@seznam.cz</a>
        <div>
          <motion.a
            href='https://github.com/Marty-W'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}>
            <AiOutlineGithub />
          </motion.a>

          <motion.a
            href='https://linkedin.com/in/martin-weber-4871341b3'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}>
            <AiOutlineLinkedin />
          </motion.a>
        </div>
      </ContactWrapper>
      <Form />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  grid-area: contact;
  scroll-snap-align: start;
  display: grid;
  grid-template-rows: 7vh 40vh 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'logo'
    'contact'
    'form';

  @media (min-width: 650px) {
    grid-template-columns: 1fr 3rem 1fr;
    grid-template-rows: 7vh repeat(5, 1fr);

    grid-template-areas:
      '. logo .'
      '. . .'
      '. . form'
      'contact . form'
      '. . form'
      '. . .';
  }
`;

const ContactWrapper = styled.div`
  grid-area: contact;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span,
  & a {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  & div {
    display: flex;
    justify-content: space-evenly;
  }
`;
