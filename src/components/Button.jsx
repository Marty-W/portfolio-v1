import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const Button = ({ primary = false, children, onClick, ...props }) => (
  <StyledButton
    {...props}
    primary={primary}
    onClick={onClick}
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}>
    {children}
  </StyledButton>
);

export default Button;

//FIXME padding on primary

const StyledButton = styled(motion.button)`
  background: ${(props) =>
    props.primary ? props.theme.colors.accent : 'none'};
  padding: 0.4rem 1.4rem;
  font-size: 1.2rem;
  border-radius: 6px;
  border: ${(props) =>
    props.primary ? 'none' : `3px solid ${props.theme.colors.secondary}`};
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  cursor: pointer;
`;
