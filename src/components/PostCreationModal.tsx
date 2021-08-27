import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

interface modal {
  open: boolean;
  handleModal: () => void;
}

const withStyles = makeStyles((theme: Theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  imageInput: {
    margin: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
    color: theme.palette.text.secondary,
  },
  textField: { margin: theme.spacing(1) },
  label: { color: theme.palette.text.primary },
}));

interface IFormData {
  image?: string;
  description: string;
}

const initialValues: IFormData = {
  image: '',
  description: '',
};

const formSchema = Yup.object().shape({
  image: Yup.string(),
  description: Yup.string().required('Campo Obrigatório'),
});

const PostCreationModal: React.FC<modal> = ({ open, handleModal }) => {
  const classes = withStyles();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      return alert(values);
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleModal}
      style={{
        overflowY: 'scroll',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <AppBar>
          <div>
            <IconButton onClick={handleModal} className={classes.backButton}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h5">Profile creation</Typography>
          </div>
        </AppBar>
        <Paper>
          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <Typography variant="h4" className={classes.title} id="title">
              Adicione uma imagem.
            </Typography>
            <label>
              <Input
                type="file"
                inputProps={{ accept: 'image/*' }}
                className={classes.imageInput}
                name="image"
                id="image"
                onChange={formik.handleChange}
                value={formik.values.image}
                error={formik.touched.image && !!formik.errors.image}
                style={{ display: 'none' }}
              />
              {!!formik.values.image && <img src={formik.values.image} />}
              <Button
                color="primary"
                variant="contained"
                component="span"
                size="large"
                className={classes.button}
              >
                Upload Image
              </Button>
            </label>

            {formik.touched.image && (
              <FormHelperText>{formik.errors.image}</FormHelperText>
            )}
            <FormControl style={{ width: '80%' }}>
              <TextField
                className={classes.textField}
                InputLabelProps={{ className: classes.label }}
                fullWidth
                name="description"
                id="description"
                label="Description"
                value={formik.values.description}
                color="primary"
                variant="filled"
                error={
                  formik.touched.description && !!formik.errors.description
                }
                autoComplete="description"
                onChange={formik.handleChange}
                multiline
                maxRows="8"
                minRows="5"
                inputProps={{ maxLength: '462' }}
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              className={classes.button}
            >
              Enviar
            </Button>
          </form>
        </Paper>
      </Container>
    </Modal>
  );
};

export default PostCreationModal;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 1%;

  background: ${(props) => props.theme.palette.background.default};
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  @media (orientation: portrait) {
    width: 80%;

    #title {
      font-size: 2rem;
    }
  }
`;

const AppBar = styled.div`
  height: 8.3333333333333%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.3888888888889%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      color: ${(props) => props.theme.palette.text.primary};
      cursor: pointer;
    }
  }
`;
