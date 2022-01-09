import React, { Fragment } from "react";
import LandingLayout from "../../components/layout/LandingLayout";
import { useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation()
  return (
    <Fragment>
      <LandingLayout url={location.pathname}>
        <div className="container">LOGIN PAGE</div>
      </LandingLayout>
    </Fragment>
  );
};

export default LoginPage;
