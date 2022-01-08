import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import { InputLabel, FormControl, FormHelperText } from "@mui/material";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

const LoginForm = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });

  const InputTextField = ({ field, form: { touched, errors }, ...props }) => {
    const isInvalid = touched[field.name] && errors[field.name];
    return (
      <FormControl error={isInvalid}>
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
          <FormHelperText id="component-error-text">
            Please enter your {field.name}.
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
            <div>
              <Typography variant="body2">Email address</Typography>
              <Field name="email" type="email" component={InputTextField} />
            </div>
            <div>
              <Typography variant="body2">Password</Typography>
              <Field name="password" type="text" component={InputTextField} />

              <div style={{ textAlign: "right" }}>
                {/* TODO: link to forgot password page */}
                <Link href="#" variant="caption" underline="hover">
                  Forgot your password?
                </Link>
              </div>
              <div>
                <Button
                  variant="contained"
                  sx={{ width: 250, marginTop: "15px" }}
                  disableElevation
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
