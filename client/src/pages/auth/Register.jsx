import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import LandingLayout from "../../old-ui-src/components/layout/LandingLayout";

const RegisterPage = () => {
  const location = useLocation()
  return (
    <Fragment>
      <LandingLayout url={location.pathname}>
        <div>REGISTER PAGE</div>
      </LandingLayout>
    </Fragment>
  );
};

export default RegisterPage;
