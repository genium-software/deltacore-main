import React, { useState } from "react";
import {
  Stack,
  Link,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const ForgotPasswordForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // push to success page
  };
  // formik for valid email

  return (
    <>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        width={400}
      >
        <div>
          <Typography variant="body2" sx={{ width: "250px" }}>
            That's okay. We can email you instructions to set a new password.
          </Typography>
        </div>
        <div>
          <Typography variant="body2">Email address</Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: 250, bgcolor: "#ffffff" }}
            type="text"
          />
        </div>
        <Button
          variant="contained"
          sx={{ width: 250, marginTop: "15px" }}
          disableElevation
          type="submit"
          onSubmit={handleSubmit}
        >
          Reset Password
        </Button>
        <Link variant="body2" underline="hover" href="/login">
          Return to login
        </Link>
      </Stack>
    </>
  );
};

export default ForgotPasswordForm;
