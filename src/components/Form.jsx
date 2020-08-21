import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from './Button';
import { Axios, db } from '../firebase/firebaseConfig';

const Form = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
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
    <>
      {isSubmitted ? (
        <SubmittedWrapper>
          <h2>Thanks for your message!</h2>
          <Button onClick={() => setIsSubmitted(false)}>
            Send me another one!
          </Button>
        </SubmittedWrapper>
      ) : (
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <h2>Leave me a message.</h2>
            <label>
              Name:
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name || ''}
                onChange={handleInputChange}
                required
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
                required
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
                required
              />
            </label>
            <Button type='submit' primary as='button'>
              Submit
            </Button>
          </form>
        </Wrapper>
      )}
    </>
  );
};

export default Form;

const Wrapper = styled.div`
  margin: 0 -1rem;
  font-weight: bold;
  padding: 1rem;
  grid-area: form;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & input {
      padding: 10px;
      border-radius: 5px;
      border: none;
      width: 100%;
      margin-top: 0.5rem;
      background-color: #dfdfdf;
    }

    & textarea {
      padding: 10px;
      border-radius: 5px;
      border: none;
      width: 100%;
      font-family: inherit;
      margin-top: 0.5rem;
      background-color: #dfdfdf;
    }
  }

  @media (min-width: 650px) {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: 1300px) {
    width: 80%;
    margin: 0 auto;

    & form {
      & button {
        width: 50%;
        margin: 0 auto;
      }
    }
  }
`;

const SubmittedWrapper = styled.div`
  grid-area: form;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & a {
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: 520px) {
    grid-row: 4 / span 1;
    justify-content: center;
  }
`;
