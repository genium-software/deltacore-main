import React from 'react';
import { ThemeProvider } from '@material-ui/styles'; // eslint-disable-line import/no-extraneous-dependencies
import { createTheme } from '@material-ui/core/styles';
import { theme as colour } from './components/theme/default.js';
import { HashRouter as Router } from "react-router-dom";
import AuthRouter from "./router/AuthRouter";
import { CssBaseline } from '@material-ui/core';

const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: colour.primary,
      },
      secondary: {
        // This is green.A700 as hex.
        main: colour.secondary,
      },
    },
  });

  return (

    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthRouter />
      </ThemeProvider>
    </Router>


  );
}

export default App;
