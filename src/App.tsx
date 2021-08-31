import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './contexts/SocketContext';

const App: React.FC = () => (
  <SocketProvider>
    <ThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
        <CssBaseline />
      </StyledComponentsThemeProvider>
    </ThemeProvider>
  </SocketProvider>
);

export default App;
