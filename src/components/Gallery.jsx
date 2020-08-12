import React from 'react';
import styled from 'styled-components';
import ScreenShot from '../assets/screenshot.png';
import ScreenShot2 from '../assets/screenshot2.png';
import Carousel from 'nuka-carousel';

const Gallery = () => {
  return (
    <Wrapper>
      <StyledSlider cellSpacing={3}>
        <img src={ScreenShot} />
        <img src={ScreenShot2} />
      </StyledSlider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: gallery;
  padding: 0.5rem;
`;

const StyledSlider = styled(Carousel)``;

export default Gallery;
