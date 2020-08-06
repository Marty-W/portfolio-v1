import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../assets/Logo.svg';

const Nav = () => (
  <Wrapper>
    <Logo />
    <Links>
      <span>work</span>
      <span>contact</span>
    </Links>
  </Wrapper>
);
const Wrapper = styled.div`
  grid-area: nav;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  text-transform: uppercase;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

const Logo = styled(LogoSVG)`
  height: 100%;
`;

export default Nav;
