import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/';

const modalRoot = document.getElementById('modal');

const Modal = ({ isShowing, hide, children }) => {
  return isShowing
    ? createPortal(
        <AnimatePresence exitBeforeEnter>
          <StyledModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key='modal'>
            <ModalCardWrapper key='card'>
              <CloseBtn onClick={() => hide()} />
              {children}
            </ModalCardWrapper>
          </StyledModal>
        </AnimatePresence>,
        modalRoot
      )
    : null;
};

const StyledModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const ModalCardWrapper = styled(motion.div)`
  position: absolute;
  width: 90vw;
  height: 70vh;
  max-width: 500px;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CloseBtn = styled(IoMdClose)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  fill: ${(props) => props.theme.colors.tertiary};
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
`;

export default Modal;
