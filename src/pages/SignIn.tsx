import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { Container, SignUpContainer, Logo, Form } from './SignUp';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '../contexts/AuthContext';

interface IFormData {
  email: string;
  password: string;
}

const initialValues: IFormData = {
  email: '',
  password: '',
};

const formSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo Obrigatório.'),
  password: Yup.string().required('Campo Obrigatório'),
});

const SignUp: React.FC = () => {
  const { signIn, failed } = useAuth();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        await signIn(values);
        formik.setSubmitting(false);
      } catch (err) {
        alert(err);
      }
      if (failed) {
        formik.errors.email = 'An error has occurred in the autentication.';
        formik.errors.password = 'An error has occurred in the autentication.';
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

        <Logo>
          <img src="" alt="" />
        </Logo>
        <Form noValidate onSubmit={formik.handleSubmit}>
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
          <Link to="/signup">{'Doesnt have an account?'}</Link>
        </Form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
