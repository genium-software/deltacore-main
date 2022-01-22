import { Button } from "@mui/material";

const SignUpButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: 250,
        height: 40,
        fontSize: 13,
      }}
      size="small"
      disableElevation
      onClick={onClick}
    >
      Sign up with email
    </Button>
  );
};

export default SignUpButton;
