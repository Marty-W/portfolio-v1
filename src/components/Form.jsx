import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button';

const Form = () => (
  <Wrapper name='contact' netlify method='post'>
    <label>
      Name:
      <input type='text' name='name' placeholder='Name' />
    </label>
    <label>
      Email:
      <input type='email' name='email' />
    </label>
    <label>
      Message:
      <input type='textarea' name='message' />
    </label>
    <Button type='submit'>Submit</Button>
  </Wrapper>
);

export default Form;

const Wrapper = styled.form`
  grid-area: form;
`;
