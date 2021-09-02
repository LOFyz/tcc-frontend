import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StyledComponentsThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <CssBaseline />
    </StyledComponentsThemeProvider>
  </ThemeProvider>
);

export default App;
