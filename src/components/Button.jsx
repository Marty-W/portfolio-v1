import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const Button = ({ primary = false, children, onClick, href, ...props }) => (
  <StyledButton
    {...props}
    primary={primary}
    onClick={onClick}
    whileTap={{ scale: 0.98 }}
    whileHover={{ scaleX: 1.05 }}
    href={href}>
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled(motion.a)`
  display: block;
  background: ${(props) =>
    props.primary ? props.theme.colors.accent : 'none'};
  padding: 0.4rem 1.4rem;
  font-size: 1.2rem;
  border-radius: 6px;
  border: 3px solid;
  border-color: ${(props) =>
    props.primary ? props.theme.colors.accent : props.theme.colors.secondary};
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  cursor: pointer;
  text-align: center;
`;
