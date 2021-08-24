import React, { useEffect } from 'react';
import { ArrowBackIos } from '@material-ui/icons';
import { Container, SignUpContainer, Logo, Form } from './SignUp';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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

        <Logo>
          <img src="" alt="" />
        </Logo>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <input
            name="email"
            id="email"
            autoFocus
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            id="password"
            autoFocus
            type="text"
            placeholder="Password"
          />
          <input type="submit" value="Submit" />
          <Link to="/signup">{'Doesnt have an account?'}</Link>
        </Form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
