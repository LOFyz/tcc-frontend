import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { Container, SignUpContainer, Logo, Form } from './SignUp';

const SignUp: React.FC = () => {
  return (
    <Container>
      <SignUpContainer>
        <a href="" className="back">
          <ArrowBackIos />
        </a>

        <Logo>
          <img src="" alt="" />
        </Logo>
        <Form>
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
