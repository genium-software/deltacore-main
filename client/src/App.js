import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import AuthRouter from "./old-ui-src/router/AuthRouter";
import "@fontsource/roboto/400.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AuthRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
