import React from "react";
import { Container, Typography, Link } from "@mui/material";

import logo from "./images/long-logo.png";
import RegisterForm from "./RegisterForm";
import GoogleButton from "./shared/GoogleButton";
import OrDivider from "./shared/OrDivider";
import PageHeader from "./shared/PageHeader";
import PageLayout from "./shared/PageLayout";

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
            <Typography variant="subtitle2">
              Already have an account?{" "}
              <Link href="/login" underline="hover">
                Sign in.
              </Link>
            </Typography>
            <br />
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
