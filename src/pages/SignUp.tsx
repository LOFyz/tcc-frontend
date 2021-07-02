import React from 'react';
import styled from 'styled-components';
import { ArrowBackIos } from '@material-ui/icons';

const SignUp: React.FC = () => {
  return (
    <Container>
      <SignUpContainer>
        <a href="" className="back">
          <ArrowBackIos />
        </a>

        <Logo>
          <img src="" alt="" /> Sign up
        </Logo>
        <Form>
          <Name>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
          </Name>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="button" value="Submit" />
          <a href="">{'Doesnt have an account?'}</a>
        </Form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

const SignUpContainer = styled.div`
  width: 80%;
  height: 80%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .back {
    align-self: flex-start;
    justify-self: flex-start;
    position: absolute;
    left: 12.8%;
    top: 11.38%;
    margin: 0.5rem;

    color: #66bb6a;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  color: #ffffff;
  text-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;

  img {
    width: 5rem;
    height: 5rem;
    background: #338a3e;
    border-radius: 50%;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 28.4rem;
    height: 3rem;
    background: #ffffff;
    box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    border: none;
    margin-top: 2rem;
    padding-left: 1rem;
    color: #acacac;
    font-size: 1.2rem;
    font-family: Roboto;

    &[type='button'] {
      background: #66bb6a;
      text-align: center;
      color: #ffffff;
      text-decoration: none;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 1.2rem;

      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
  a {
    width: 28.4rem;
    height: 1.2rem;

    background: #98ee99;
    box-shadow: 0rem 0.1rem 0.4rem rgba(0, 0, 0, 0.25);
    padding-left: 0.5rem;
    font-family: Roboto;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    color: #338a3e;

    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;

  input {
    width: 13.8rem;
    height: 3rem;
    background: #ffffff;
    box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    border: none;
    padding-left: 1rem;
    color: #acacac;
    font-size: 1.2rem;
    font-family: Roboto;

    & + input {
      margin-left: 0.8rem;
    }
  }
`;
