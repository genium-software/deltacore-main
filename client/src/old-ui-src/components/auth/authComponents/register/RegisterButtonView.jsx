import React, { useState } from "react";
import {
  Typography,
  Link,
  Modal,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import { MdClose } from "react-icons/md";

import GoogleButton from "../shared/GoogleButton";
import OrDivider from "../shared/OrDivider";
import SignUpButton from "./SignUpButton";
import RegisterForm from "./RegisterForm";

const RegisterButtonView = () => {
  const [showModal, setShowModal] = useState(false);

  const FormModal = (
    <Modal open={showModal}>
      <Container>
        <div
          style={{
            width: 325,
            height: 400,
            position: "absolute",
            top: "130px",
            left: "240px",
          }}
        >
          <IconButton onClick={() => setShowModal(false)} sx={{}}>
            <MdClose />
          </IconButton>
        </div>
        <Box
          margin="auto"
          marginTop="125px"
          autoComplete="off"
          alignItems="center"
          justifyContent="center"
          width={325}
          height={400}
          display="flex"
          bgcolor="#f6f8fa"
          border={1}
          borderColor="#e2e6eb"
          borderRadius={2}
        >
          <RegisterForm />
        </Box>
      </Container>
    </Modal>
  );

  return (
    <>
      {FormModal}
      <Typography variant="subtitle2">
        Already have an account?{" "}
        <Link href="/login" underline="hover">
          Sign in.
        </Link>
      </Typography>
      <br />
      <GoogleButton>Sign up with Google</GoogleButton>
      <OrDivider />
      <SignUpButton onClick={() => setShowModal(true)} />
      <Typography
        variant="body2"
        gutterBottom
        sx={{ fontSize: "11px", width: "250px" }}
      >
        By signing up, you agree to our <Link href="#">Terms of Use</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </Typography>
    </>
  );
};

export default RegisterButtonView;
