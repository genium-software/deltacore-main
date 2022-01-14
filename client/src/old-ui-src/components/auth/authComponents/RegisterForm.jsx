import React from "react";
import {
  Stack,
  FormControl,
  FormHelperText,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link
} from "@mui/material";
import * as yup from "yup";
import { Formik, Field } from "formik";

const RegisterForm = () => {
  const validationSchema = yup.object({
    email: yup.string().required("Please enter your email."),
    password: yup.string().required("Please enter your password."),
  });

  const InputTextField = ({ field, form: { touched, errors }, ...props }) => {
    const isInvalid = touched[field.name] && errors[field.name];
    return (
      <FormControl error={isInvalid}>
        <Typography
          variant="body2"
          sx={{
            color: isInvalid ? "#d32f2f" : "#000000",
          }}
        >
          {field.name === "email" ? "Email address" : "Password"}
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: 250, bgcolor: "#ffffff" }}
          type="text"
          error={isInvalid}
          {...field}
          {...props}
        />
        {isInvalid ? (
          <FormHelperText variant="standard">
            {errors[field.name]}
          </FormHelperText>
        ) : null}
      </FormControl>
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <div>
            <Stack
              spacing={2}
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              width={325}
            >
              <div>
                <Typography variant="body2">Email address</Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  type="text"
                  sx={{ width: 250, bgcolor: "#ffffff" }}
                />
              </div>
              <div>
                <Typography variant="body2">Password</Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{ width: 250, bgcolor: "#ffffff" }}
                />
              </div>
              <div>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ fontSize: "10px", width: "250px" }}
                >
                  By clicking the "Sign Up" button, you are creating a Deltacore
                  account, and you agree to our <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>.
                </Typography>
              </div>

              <Button
                variant="contained"
                sx={{ width: 250, marginTop: "15px" }}
                disableElevation
                type="submit"
              >
                Sign Up
              </Button>
            </Stack>
          </div>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
