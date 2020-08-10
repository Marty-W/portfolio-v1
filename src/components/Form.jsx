import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from './Button';
import { Axios, db } from '../firebase/firebaseConfig';

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    addToDb();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const sendEmail = () => {
    Axios.post(
      'https://europe-west3-portfolio-9b1be.cloudfunctions.net/submit',
      {
        ...formData,
        time: Date.now(),
      }
    ).catch((error) => {
      console.log(error);
    });
  };

  const addToDb = async () => {
    try {
      await db.collection('emails').add({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date(),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <h2>Leave me a message.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name='message'
            placeholder='Your message'
            rows='5'
            cols='5'
            value={formData.message || ''}
            onChange={handleInputChange}
          />
        </label>
        <Button type='submit' primary>
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  padding: 1rem;
  grid-area: form;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  & h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & input {
      padding: 10px;
      border-radius: 5px;
      border: none;
      margin: 1rem 0;
      width: 100%;
    }

    & textarea {
      padding: 10px;
      border-radius: 5px;
      border: none;
      width: 100%;
      margin: 1rem 0;
      font-family: inherit;
    }
  }
`;
