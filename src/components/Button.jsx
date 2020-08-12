import React from 'react';
import styled from 'styled-components';
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

const StyledButton = styled(motion.button)`
  background: none;
  padding: 0.4rem 1.4rem;
  font-size: 1.2rem;
  border-radius: 6px;
  border: 3px solid
    ${(props) =>
      props.primary ? props.theme.colors.accent : props.theme.colors.secondary};
  color: ${(props) =>
    props.primary ? props.theme.colors.accent : props.theme.colors.secondary};
  cursor: pointer;
`;
