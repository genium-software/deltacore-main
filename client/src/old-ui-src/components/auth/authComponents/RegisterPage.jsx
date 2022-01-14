import React from "react";
import {
  Stack,
  Box,
  Container,
} from "@mui/material";

import logo from "./long-logo.png";
import RegisterForm from "./RegisterForm";
import GoogleButton from "./GoogleButton";
import OrDivider from "./OrDivider";
import PageHeader from "./PageHeader";
import PageLayout from "./PageLayout";

const Register = () => {
  const Logo = (
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
            <GoogleButton>Sign up with Google</GoogleButton>
            <OrDivider />
            <RegisterForm />
          </PageLayout>
        </Container>
      </div>
    </>
  );
};

export default Register;
