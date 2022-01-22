import React from "react";
import {
  Stack,
  FormControl,
  FormHelperText,
  Link,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { Formik, Field } from "formik";

const LoginForm = () => {
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
              width={400}
            >
              <Field name="email" type="email" component={InputTextField} />
              <div>
                <Field
                  name="password"
                  type="password"
                  component={InputTextField}
                />
                <div style={{ textAlign: "right" }}>
                  <Link href="/login/forgot" variant="caption" underline="hover">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <Button
                variant="contained"
                sx={{ width: 250, marginTop: "15px" }}
                disableElevation
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
