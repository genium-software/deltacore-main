import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthRouter from "./old-ui-src/router/AuthRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/open-sans";

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
      error: {
        main: "#d32f2f",  // from MUI
      },
      danger: {
        main: "#9c503d",
      },
      info: {
        main: "#3997be",
      },
    },
    typography: {
      fontFamily: ["Open Sans"],
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
