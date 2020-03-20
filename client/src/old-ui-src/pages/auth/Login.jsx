import React, { Fragment } from "react";
import LandingLayout from "../../components/layout/LandingLayout";

const LoginPage = ({ match }) => {
  return (
    <Fragment>
      <LandingLayout url={match.url}>
        <div className="container">LOGIN PAGE</div>
      </LandingLayout>
    </Fragment>
  );
};

export default LoginPage;
