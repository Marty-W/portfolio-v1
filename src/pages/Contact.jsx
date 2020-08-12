import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Projects';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Form from '../components/Form';

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <Logo />
      <ContactWrapper>
        <span>Martin Weber</span>
        <span>webermartin@seznam.cz</span>
        <div>
          <AiOutlineGithub />
          <AiOutlineLinkedin />
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
  grid-template-rows: 7vh 35vh 1fr;
  grid-template-columns: 1rem 1fr 1fr 1rem;
  grid-template-areas:
    '. logo logo .'
    '. contact contact .'
    'form form form form';
`;

const ContactWrapper = styled.div`
  grid-area: contact;
  place-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & span {
    font-size: 1.5rem;
  }

  & svg {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
  }
`;
