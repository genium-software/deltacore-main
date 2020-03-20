import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Switch>
  );
};

export default AuthRouter;
