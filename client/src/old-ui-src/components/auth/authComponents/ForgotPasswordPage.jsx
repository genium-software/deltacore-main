import React from "react";
import { Stack, Link, Container, Typography } from "@mui/material";

import PageLayout from "./shared/PageLayout";
import PageHeader from "./shared/PageHeader";
import ForgotPasswordForm from "./ForgotPasswordForm";
import icon from "./images/icon-logo.png";

const ForgotPasswordPage = () => {
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
          <PageHeader>Forgot your password?</PageHeader>
        </div>
        <PageLayout>

          <ForgotPasswordForm />
        </PageLayout>
      </Container>
    </>
  );
};

export default ForgotPasswordPage;
