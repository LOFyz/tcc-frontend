/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { ArrowBackIos } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '../contexts/AuthContext';

interface IFormData {
  name: string;
  email: string;
  password: string;
  is_teacher: boolean;
}

const initialValues: IFormData = {
  name: '',
  email: '',
  password: '',
  is_teacher: false,
};

const formSchema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório.'),
  email: Yup.string().email('E-mail inválido').required('Campo Obrigatório.'),
  password: Yup.string().required('Campo Obrigatório'),
  is_teacher: Yup.boolean().required('Campo Obrigatório'),
});

const SignUp: React.FC = () => {
  const { signUp } = useAuth();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        await signUp(values);
        formik.setSubmitting(false);
      } catch (err) {
        alert(err);
        formik.errors.name = 'An error has occurred in the sign up.';
        formik.errors.email = 'An error has occurred in the sign up.';
        formik.errors.password = 'An error has occurred in the sign up.';
        formik.touched.name = true;
        formik.touched.email = true;
        formik.touched.password = true;
      }
    },
  });

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
          <input
            type="name"
            placeholder="Name"
            name="name"
            id="name"
            autoComplete="name"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{
              border:
                formik.touched.name && !!formik.errors.name
                  ? '0.1rem solid #ff0000'
                  : 'none',
            }}
          />
          {formik.touched.name && formik.errors.name && (
            <span style={{ color: '#ff0000' }}>{formik.errors.name}</span>
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{
              border:
                formik.touched.email && !!formik.errors.email
                  ? '0.1rem solid #ff0000'
                  : 'none',
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: '#ff0000' }}>{formik.errors.email}</span>
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            autoComplete="password"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.password}
            style={{
              border:
                formik.touched.password && !!formik.errors.password
                  ? '0.1rem solid #ff0000'
                  : 'none',
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{ color: '#ff0000' }}>{formik.errors.password}</span>
          )}
          <input type="submit" value="Submit" />
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

  span {
    font-size: 1rem;
  }

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
      cursor: pointer;
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
