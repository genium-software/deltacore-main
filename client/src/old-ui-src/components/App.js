import { createMuiTheme } from "@material-ui/core/styles";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { theme as colour } from "../components/theme/default";
import { ThemeProvider } from "@material-ui/styles";
import AuthRouter from "../router/AuthRouter";
import MainRouter from "../router/AuthRouter";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../store";
import Footer from "../components/layout/Footer";

import "Assets/css/index.css";

class App extends Component {
  render() {
    const theme = createMuiTheme({
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
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <AuthRouter />
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
