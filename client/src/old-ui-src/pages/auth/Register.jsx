import React, { Fragment } from "react";
import LandingLayout from "../../components/layout/LandingLayout";

const RegisterPage = ({ match }) => {
  return (
    <Fragment>
      <LandingLayout url={match.url}>
        <div>REGISTER PAGE</div>
      </LandingLayout>
    </Fragment>
  );
};

export default RegisterPage;
