import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  typography: { fontSize: 25 },
  palette: {
    primary: {
      main: '#5fbe7a',
      dark: '#2a8d4d',
      light: '#91f1a9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#343a40',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
});

export default theme;
