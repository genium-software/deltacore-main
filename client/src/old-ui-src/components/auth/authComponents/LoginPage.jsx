import React from "react";
import {
  Stack,
  Box,
  Link,
  Container,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";

import icon from "./icon-logo.png";
import LoginForm from "./LoginForm";

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

  const GoogleButton = (
    // TODO: make oauth client for google login and link here
    <Button
      variant="outlined"
      startIcon={<FcGoogle />}
      color="primary"
      sx={{
        width: 250,
        height: 40,
        fontSize: 13,
        bgcolor: "#ffffff",
      }}
      size="small"
      disableElevation
    >
      Sign in with Google
    </Button>
  );

  const OrDivider = (
    <Box width={250}>
      <Divider variant="middle" textAlign="center" flexItem>
        OR
      </Divider>
    </Box>
  );

  const PageHeader = (
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      mt="10px"
      textAlign="center"
      sx={{ letterSpacing: "-1px" }}
    >
      Sign in to Deltacore
    </Typography>
  );

  return (
    <>
      <div>
        <Container maxWidth="sm">
          <div>
            {Logo}
            {PageHeader}
          </div>
          <Box
            component="form"
            m="auto"
            mt="25px"
            noValidate
            autoComplete="off"
            alignItems="center"
            justifyContent="center"
            width={300}
            height={425}
            display="flex"
            bgcolor="#f6f8fa"
            border={1}
            borderColor="#e2e6eb"
            borderRadius={2}
          >
            <Stack
              spacing={2}
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              width={400}
            >
              <LoginForm />
              <Stack
                spacing={2}
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                width={400}
              >
                {OrDivider}
                {GoogleButton}
                <div>
                  <br />
                  <Typography variant="subtitle2">
                    New here?{" "}
                    <Link href="#" variant="subtitle2" underline="hover">
                      Create an account.
                    </Link>
                  </Typography>
                </div>
              </Stack>
            </Stack>
          </Box>
        </Container>
        {/* <Box
          component="form"
          m="auto"
          mt="20px"
          noValidate
          autoComplete="off"
          alignItems="center"
          justifyContent="center"
          width={350}
          height={50}
          display="flex"
          bgcolor="#ffffff"
          border={1}
          borderColor="#c7c7c7"
          borderRadius={2}
        >
          <div>
            <Typography variant="subtitle2">
              New here?{" "}
              <Link href="#" variant="subtitle2" underline="hover">
                Create an account.
              </Link>
            </Typography>
          </div>
        </Box> */}
      </div>
    </>
  );
};

export default Login;
