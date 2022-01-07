import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";


const LoginForm = () => {
  const SignInButton = (
    <div>
      <Button variant="contained" sx={{ width: 200, marginTop: "15px" }} disableElevation>
        Sign in
      </Button>
    </div>
  );
  return (
    <>
      <div>
        <Typography variant="body1">Email address</Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: 200, bgcolor: "#ffffff" }}
        />
      </div>
      <div>
        <Typography variant="body1">Password</Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: 200, bgcolor: "#ffffff" }}
        />
        <div style={{ textAlign: "right" }}>
          {/* TODO: link to forgot password page */}
          <Link href="#" variant="caption" underline="hover">
            Forgot your password?
          </Link>
        </div>
        {SignInButton}
      </div>
    </>
  );
};

export default LoginForm;
