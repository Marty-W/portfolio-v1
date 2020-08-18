import React from 'react';
import styled from 'styled-components/macro';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import newTask from '../assets/gifs/newTask_opt.gif';
import habitStreak from '../assets/gifs/habit_streaks_opt.gif';
import newHabit from '../assets/gifs/newHabit_opt.gif';
import session from '../assets/gifs/session_opt.gif';
import stash from '../assets/gifs/stash_opt.gif';
import theme from '../assets/gifs/theme_opt.gif';
import tips from '../assets/gifs/tips_opt.gif';
import responsive from '../assets/responsive.png';

const Gallery = () => {
  return (
    <Wrapper>
      <AwesomeSlider className='slider'>
        <div className='img'>
          <img src={responsive} alt='' />
          <Description>Swiss Knife is fully responsive.</Description>
        </div>
        <div className='img'>
          <img src={newHabit} alt='' />
          <Description>
            Habit module lets you track your habits and count your best streaks.
          </Description>
        </div>
        <div className='img'>
          <img src={habitStreak} alt='' />
          <Description>
            All the data is stored in firebase in your user account.
          </Description>
          <Description>Swiss Knife works even without logging in.</Description>
        </div>
        <div className='img'>
          <img src={session} alt='' />
          <Description>Pomodoro module tracks your focus sessions.</Description>
          <Description>
            You can set a daily goal for focus session time.
          </Description>
        </div>
        <div className='img'>
          <img src={newTask} alt='' />
          <Description>Tasks can be created and marked as done.</Description>
          <Description>You can also hide your completed tasks.</Description>
        </div>
        <div className='img'>
          <img src={stash} alt='' />
          <Description>
            Uncompleted tasks are moved to stash after midnight.
          </Description>
          <Description>
            You can schedule them individually to today.
          </Description>
        </div>
        <div className='img'>
          <img src={theme} alt='' />
          <Description>Full app-wide Dark/Light theme support.</Description>
        </div>
        <div className='img'>
          <img src={tips} alt='' />
          <Description>
            Every module has its own dedicated "tutorial" and tips.
          </Description>
        </div>
      </AwesomeSlider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0 2rem 0;
  position: relative;

  & .slider {
    width: 100%;
    height: 100%;
    --loader-bar-color: ${(props) => props.theme.colors.accent};
    --control-bullet-active-color: ${(props) => props.theme.colors.accent};
  }

  & .img {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};

    & img {
      width: 100%;
      height: 90%;
      object-fit: contain;
    }
  }
`;

const Description = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

export default Gallery;
