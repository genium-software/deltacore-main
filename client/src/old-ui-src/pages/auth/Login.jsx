import React, { Fragment } from "react";
// import LandingLayout from "../../components/layout/LandingLayout";
import LoginForm from "../../components/auth/authComponents/LoginForm";

const LoginPage = ({ match }) => {
  return (
    <Fragment>
        <LoginForm />
    </Fragment>
  );
};

export default LoginPage;
