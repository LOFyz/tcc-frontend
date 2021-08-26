import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowBackIos } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

interface IFormData {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: IFormData = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};

const formSchema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório.'),
  lastName: Yup.string().required('Campo Obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo Obrigatório.'),
  password: Yup.string().required('Campo Obrigatório'),
});

const SignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      return alert(values);
    },
  });

  useEffect(() => {
    if (formik.errors.email) {
      alert(formik.errors.email);
    }
    if (formik.errors.password) {
      alert(formik.errors.password);
    }
  }, [formik.errors.email, formik.errors.password]);

  return (
    <Container>
      <SignUpContainer>
        <Link to="" className="back">
          <ArrowBackIos />
        </Link>

        <Logo haveText={true}>
          <img src="" alt="" /> Sign Up
        </Logo>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Name>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
          </Name>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="button" value="Submit" />
          <Link to="/signin">{'Already have an account?'}</Link>
        </Form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

export const SignUpContainer = styled.div`
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

export const Logo = styled.div`
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
    width: ${(p: { haveText?: boolean }) => (p.haveText ? '5rem' : '15rem')};
    height: ${(p: { haveText?: boolean }) => (p.haveText ? '5rem' : '15rem')};
    /* width: 5rem;
    height: 5rem; */
    background: #338a3e;
    border-radius: 50%;
  }
`;

export const Form = styled.form`
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

    &[type='button'],
    &[type='submit'] {
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
