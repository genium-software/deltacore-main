import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import AuthRouter from "./old-ui-src/router/AuthRouter";
import "@fontsource/roboto/400.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#56658a",
      },
      secondary: {
        main: "#AB9671",
      },
      warning: {
        main: "#d7a319",
      },
      success: {
        main: "#2bc194",
      },
      danger: {
        main: "#9c503d",
      },
      info: {
        main: "#3997be",
      },
    },
  });

  return (
    <Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AuthRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
