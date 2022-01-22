import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordPage from "../components/auth/authComponents/ForgotPasswordPage";

// import Home from "../pages/Home";
// import LandingPage from "../pages/LandingPage";
import LoginPage from "../components/auth/authComponents/LoginPage";
import RegisterPage from "../components/auth/authComponents/register/RegisterPage";

const AuthRouter = () => {
  return (
    <Fragment>
      <Routes>
        {/* <Route exact path="/" element={<LandingPage />} /> */}
        {/* <Route exact path="/dashboard" component={Home} /> */}
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/login/forgot" element={<ForgotPasswordPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
};

export default AuthRouter;
