import React from 'react';
import styled from 'styled-components/macro';

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Header;

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.accent};
  grid-area: header;
`;
