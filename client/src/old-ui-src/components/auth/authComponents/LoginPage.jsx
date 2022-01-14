import React from "react";
import {
  Stack,
  Link,
  Container,
  Typography,
} from "@mui/material";

import icon from "./icon-logo.png";
import LoginForm from "./LoginForm";
import GoogleButton from "./GoogleButton";
import OrDivider from "./OrDivider";
import PageHeader from "./PageHeader";
import PageLayout from "./PageLayout";

const Login = () => {
  // CHILD COMPONENTS
  const Logo = (
    <img
      src={icon}
      style={{
        marginTop: "40px",
        width: "15%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
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
