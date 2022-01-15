import React from "react";
import {
  Stack,
  Link,
  Container,
  Typography,
} from "@mui/material";

import icon from "./images/icon-logo.png";
import LoginForm from "./LoginForm";
import GoogleButton from "./shared/GoogleButton";
import OrDivider from "./shared/OrDivider";
import PageHeader from "./shared/PageHeader";
import PageLayout from "./shared/PageLayout";

const Login = () => {
  const Logo = (
    <a href="/">
      <img
        src={icon}
        style={{
          marginTop: "40px",
          width: "10%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </a>
  );

  return (
    <>
      <Container maxWidth="md">
        <div>
          {Logo}
          <PageHeader>Sign into Deltacore</PageHeader>
        </div>
        <PageLayout>
          <LoginForm />
          <Stack
            spacing={2}
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            width={400}
          >
            <OrDivider />
            <GoogleButton>Sign in with google </GoogleButton>
            <div>
              <br />
              <Typography variant="subtitle2">
                New here?{" "}
                <Link href="/register" variant="subtitle2" underline="hover">
                  Create an account.
                </Link>
              </Typography>
            </div>
          </Stack>
        </PageLayout>
      </Container>
    </>
  );
};

export default Login;
