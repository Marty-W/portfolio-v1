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
  scroll-snap-align: end;
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

  & span {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }

  & div {
    display: flex;
    justify-content: space-evenly;
  }
`;
