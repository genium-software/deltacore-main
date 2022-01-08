import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const LoginForm = () => {
  return (
    <>
      <div>
        <Typography variant="body2">Email address</Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: 250, bgcolor: "#ffffff" }}
        />
      </div>
      <div>
        <Typography variant="body2">Password</Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: 250, bgcolor: "#ffffff" }}
        />
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
          >
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
