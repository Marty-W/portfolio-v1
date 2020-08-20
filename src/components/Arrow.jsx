import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Arrow = ({ text }) => (
  <Wrapper>
    <span>{text}</span>
    <motion.div
      animate={{ y: 2 }}
      initial={{ y: 0 }}
      transition={{ delay: 3, type: 'spring', damping: '0' }}>
      <AiOutlineArrowDown />
    </motion.div>
  </Wrapper>
);

export default Arrow;

const Wrapper = styled.div`
  grid-area: arrow;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: end;
  align-items: center;

  & span {
    font-size: 1.3rem;
    margin-right: 1rem;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
