import React from 'react';
import styled from 'styled-components/macro';
import ScreenShot from '../assets/screenshot.png';
import ScreenShot2 from '../assets/screenshot2.png';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Gallery = () => {
  return (
    <Wrapper>
      <AwesomeSlider
        media={[{ source: ScreenShot }, { source: ScreenShot2 }]}
        className='slider'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0 2rem 0;

  & .slider {
    width: 100%;
    height: 100%;
  }
  & img {
    width: 100%;
    object-fit: contain;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export default Gallery;
