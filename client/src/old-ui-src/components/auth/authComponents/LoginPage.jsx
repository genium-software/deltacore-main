import React from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import LoginForm from "./LoginForm";
import Button from "@mui/material/Button";


import { FcGoogle } from "react-icons/fc";
import icon from "./icon-logo.png";

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
        width: 200,
        height: 40,
        fontSize: 12,
        bgcolor: "#ffffff",
      }}
      size="small"
      disableElevation
    >
      Sign in with Google
    </Button>
  );

  const OrDivider = (
    <Box width={200}>
      <Divider variant="middle" textAlign="center" flexItem>
        OR
      </Divider>
    </Box>
  );



  const PageHeader = (
    <Typography
      variant="h4"
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
    <Fragment>
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
            width={350}
            height={450}
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
              width={300}
            >
              <LoginForm />
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
    </Fragment>
  );
};

export default Login;
