import { React, useState } from "react";
import {
  Stack,
  FormControl,
  FormHelperText,
  Typography,
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Collapse,
} from "@mui/material";
import { MdVisibilityOff, MdVisibility, MdClear, MdDone } from "react-icons/md";
import * as yup from "yup";
import { Formik, Field } from "formik";
import PasswordChecklist from "react-password-checklist";

const RegisterForm = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Please enter an email."),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);

  const passwordChecklistIcons = {
    ValidIcon: <MdDone color="#2bc194" />,
    InvalidIcon: <MdClear color="#FF0033" />,
  };

  const InputTextField = ({ field, form: { touched, errors }, ...props }) => {
    let isInvalid;
    if (touched[field.name] && errors[field.name]) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }
    return (
      <div>
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
      </div>
    );
  };

  const PasswordInputField = () => {
    return (
      <>
        <div>
          <Typography variant="body2">Password</Typography>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            sx={{ width: 250, bgcolor: "#ffffff" }}
            size="small"
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => setPasswordOnFocus(true)}
            onBlur={() => setPasswordOnFocus(false)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setPasswordOnFocus(true);
                  }}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div>
          <Collapse in={passwordOnFocus}>
            <PasswordChecklist
              rules={[
                "minLength",
                "specialChar",
                "number",
                "capital",
                "lowercase",
              ]}
              iconSize={10}
              minLength={8}
              value={password}
              onChange={(isValid) => {
                setPasswordIsValid(isValid);
              }}
              iconComponents={passwordChecklistIcons}
              style={{
                fontSize: "14px",
                marginLeft: "3px",
                marginTop: "-7px",
              }}
            />
          </Collapse>
        </div>
      </>
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
              <Typography variant="h3" gutterBottom fontSize="20px">
                Sign up for your account
              </Typography>
              <Field name="email" type="email" component={InputTextField} />
              <PasswordInputField />
              <Button
                variant="contained"
                sx={{ width: 250, marginTop: "15px" }}
                disableElevation
                disabled={!passwordIsValid && errors !== {}}
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
