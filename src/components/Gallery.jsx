import React from 'react';
import styled from 'styled-components';
import ScreenShot from '../assets/screenshot.png';
import ScreenShot2 from '../assets/screenshot2.png';

const Gallery = () => {
  return (
    <Wrapper>
      <img src={ScreenShot} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: gallery;
`;

export default Gallery;
