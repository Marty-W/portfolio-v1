import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoSVG } from '../assets/Logo.svg';

const Nav = () => (
  <Wrapper>
    <Logo />
    <Links>
      <a href='#work'>
        <span>work</span>
      </a>
      <a href='#contact'>
        <span>contact</span>
      </a>
    </Links>
  </Wrapper>
);
const Wrapper = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  height: 60%;
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.tertiary};
`;

const Logo = styled(LogoSVG)`
  width: 3rem;
  height: 3rem;
  stroke: ${(props) => props.theme.colors.tertiary};
`;

export default Nav;
