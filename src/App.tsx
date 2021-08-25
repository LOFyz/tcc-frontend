import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <CssBaseline />
    </StyledComponentsThemeProvider>
  </ThemeProvider>
);

export default App;
