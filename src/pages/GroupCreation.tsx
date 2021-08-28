import React from 'react';
import {
  createStyles,
  FormControl,
  makeStyles,
  TextField,
  CardContent,
  Card,
} from '@material-ui/core';

import styled from 'styled-components';
import * as Yup from 'yup';

interface IFormData {
  name: string;
  lastName: string;
  email: string;
  ageTerm: boolean;
  parentName: string | null;
  phone: string;
  birthDate: string;
  gender: string | null;
  city: string;
  estate: string;
  sector: string;
  religion: string;
  canWhatsapp: string;
  IMEmail: boolean;
  IMWhatsapp: boolean;
  IMNaoGostaria: boolean;
  imageUsage: string;
  privacyTerm: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialValues: IFormData = {
  name: '',
  lastName: '',
  email: '',
  ageTerm: false,
  parentName: '',
  phone: '',
  birthDate: '',
  gender: '',
  city: '',
  estate: '',
  sector: '',
  religion: '',
  canWhatsapp: '',
  IMEmail: false,
  IMWhatsapp: false,
  IMNaoGostaria: false,
  imageUsage: '',
  privacyTerm: false,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Campo Obrigatório.')
    .min(2, 'O nome dever ter pelo menos 2 caracteres'),
  lastName: Yup.string(),
  email: Yup.string().email('E-mail inválido').required('Campo Obrigatório.'),
  ageTerm: Yup.boolean()
    .required('Campo Obrigatório')
    .equals([true], 'Autorização Obrigatória'),
  parentName: Yup.string(),
  phone: Yup.string()
    .required('Campo Obrigatório')
    .min(10, 'Insira um telefone valido.'),
  birthDate: Yup.string().required('Campo Obrigatório'),
  gender: Yup.string(),
  city: Yup.string().required('Campo Obrigatório'),
  estate: Yup.string().required('Campo Obrigatório'),
  sector: Yup.string().required('Campo Obrigatório'),
  religion: Yup.string().required('Campo Obrigatório'),
  canWhatsapp: Yup.string()
    .required('Campo Obrigatório')
    .equals(['Sim'], 'Autorização Obrigatória'),
  IMEmail: Yup.boolean(),
  IMWhatsapp: Yup.boolean(),
  IMNaoGostaria: Yup.boolean(),
  imageUsage: Yup.string()
    .required('Campo Obrigatório')
    .equals(['Sim'], 'Autorização Obrigatória'),
  privacyTerm: Yup.boolean().required(),
});

const useStyles = makeStyles((theme) => {
  return createStyles({
    textField: {
      backgroundColor: theme.palette.secondary.main,
      flexWrap: 'wrap',
      borderRadius: '0.4rem',
      'font-size': '2rem',
      'margin-bottom': '1.5rem',
      '&:hover': { background: theme.palette.background.default },
    },

    radio: {
      width: '2.3rem',
      height: '2.3rem',
      color: theme.palette.text.primary,
      marginRight: '1rem',
    },

    radioGroupItem: {
      marginTop: '0.5rem',
      marginLeft: '0.5rem',
      width: '100%',
      color: theme.palette.text.primary,
      fontSize: '2rem',
    },

    text: {
      color: theme.palette.text.primary,
      fontSize: '2rem',
    },
    submitButton: {
      backgroundColor: theme.palette.secondary.main,
      fontSize: '2rem',
    },
    card: {
      backgroundColor: theme.palette.secondary.main,
      width: '100%',
      marginTop: '1rem',
      left: '0.8rem',
    },
    tooltipButton: {
      borderRadius: '50%',
      height: '3rem',
      width: '3rem',
      border: 0,
      color: theme.palette.text.primary,
      fontSize: '1.7rem',
      backgroundColor: theme.palette.secondary.main,
      position: 'relative',
      bottom: '6rem',
      left: '90%',
      alignSelf: 'center',
      marginBottom: '-3rem',
    },
  });
});

const GroupCreation: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card} variant="elevation">
        <CardContent style={{ textAlign: 'center' }}>
          <Headline>Criação de Turma</Headline>
        </CardContent>
      </Card>
      <form>
        <Divider>Dados do Inscrito</Divider>
        <FormControl style={{ width: '100%' }}>
          <TextField
            name="name"
            id="name"
            autoFocus
            autoComplete="name"
            className={classes.textField}
            label="Nome"
            variant="filled"
            fullWidth
            InputLabelProps={{
              style: { fontSize: '2rem' },
            }}
          />
          <TextField
            name="lastName"
            id="lastName"
            autoFocus
            autoComplete="lastName"
            className={classes.textField}
            label="Sobrenome"
            variant="filled"
            fullWidth
            InputLabelProps={{
              style: { fontSize: '2rem' },
            }}
          />
          <TextField
            name="email"
            id="email"
            autoFocus
            autoComplete="email"
            className={classes.textField}
            label="Email"
            variant="filled"
            type="email"
            fullWidth
            InputLabelProps={{
              style: { fontSize: '2rem' },
            }}
          />
          <TextField
            id="phone"
            name="phone"
            type="tel"
            inputProps={{ pattern: '([0-9]{2}) [0-9]{4,6}-[0-9]{3,4}$' }}
            className={classes.textField}
            autoFocus
            autoComplete="phone"
            label="Whatsapp"
            variant="filled"
            fullWidth
            InputLabelProps={{
              style: { fontSize: '2rem' },
            }}
          />
          <TextField
            name="birthDate"
            id="birthDate"
            autoFocus
            autoComplete="birthDate"
            className={classes.textField}
            label="Data de Nascimento"
            variant="filled"
            type="date"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '2rem' },
            }}
            fullWidth
            style={{ marginBottom: '2rem' }}
          />
        </FormControl>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <FormControl>
            <TextField
              name="city"
              id="city"
              autoFocus
              autoComplete="city"
              className={classes.textField}
              label={'Cidade'}
              variant="filled"
              type="city"
              fullWidth
              InputLabelProps={{
                style: { fontSize: '2rem' },
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
              name="estate"
              id="estate"
              autoFocus
              autoComplete="estate"
              className={classes.textField}
              label={'Estado'}
              variant="filled"
              type="estate"
              fullWidth
              InputLabelProps={{
                style: { fontSize: '2rem' },
              }}
            />
          </FormControl>
        </div>
      </form>
    </Container>
  );
};

export default GroupCreation;

const Container = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  .MuiInputBase-input {
    font-size: 2rem;
  }
  label,
  svg {
    color: ${(props) => props.theme.palette.text.primary};
  }
  @media (orientation: landscape) {
    padding: 0 20%;
    padding-bottom: 3rem;
    > form {
      width: 58vw;
    }
  }
`;

const Headline = styled.h1`
  color: ${(props) => props.theme.palette.text.primary};
  font: 400 2rem Roboto;
  font-size: 3rem;
`;

const Divider = styled.div`
  border-top: 0.1rem solid ${(props) => props.theme.palette.text.primary};
  margin: 2rem 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.text.primary};
  font: 400 2rem Roboto;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Confirmacao: React.FC = () => {
  const classes = useStyles();

  return (
    <ConfirmationContainer>
      <Card className={classes.card} variant="elevation">
        <CardContent style={{ textAlign: 'center' }}>
          <ConfirmationTitle>Criação de turma concluída!</ConfirmationTitle>
        </CardContent>
      </Card>
    </ConfirmationContainer>
  );
};

const ConfirmationContainer = styled.div`
  width: 98vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  .MuiInputBase-input {
    font-size: 2rem;
  }
  @media (orientation: landscape) {
    padding: 0 20%;
    padding-bottom: 3rem;
  }
`;

const ConfirmationTitle = styled.h1`
  color: ${(props) => props.theme.palette.text.primary};
  font: 400 2rem Roboto;
  font-size: 3rem;
`;
