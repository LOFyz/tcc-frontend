import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { Container, SignUpContainer, Logo, Form } from './SignUp';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <Container>
      <SignUpContainer>
        <Link to="" className="back">
          <ArrowBackIos />
        </Link>

        <Logo>
          <img src="" alt="" />
        </Logo>
        <Form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="button" value="Submit" />
          <Link to="/signup">{'Doesnt have an account?'}</Link>
        </Form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
