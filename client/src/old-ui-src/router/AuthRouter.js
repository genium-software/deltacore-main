import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// import Home from "../pages/Home";
// import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

const AuthRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        {/* <Route exact path="/dashboard" component={Home} />
      <Route exact path="/login" component={LoginPage} /> */}
      <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
};

export default AuthRouter;
