import React from "react";
import { Container } from "@mui/material";

import logo from "../images/long-logo.png";
import PageHeader from "../shared/PageHeader";
import PageLayout from "../shared/PageLayout";
import RegisterButtonView from "../register/RegisterButtonView";

const Register = () => {
  const Logo = (
    <a href="/">
      <img
        src={logo}
        style={{
          marginTop: "40px",
          width: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </a>
  );

  return (
    <>
      <div>
        <Container maxWidth="md">
          <div>
            {Logo}
            <div style={{ marginTop: "10px" }}>
              <PageHeader>Create your account</PageHeader>
            </div>
          </div>
          <PageLayout>
            <RegisterButtonView />
          </PageLayout>
        </Container>
      </div>
    </>
  );
};

export default Register;
