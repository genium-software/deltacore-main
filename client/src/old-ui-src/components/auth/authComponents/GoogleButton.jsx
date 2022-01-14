import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";

const GoogleButton = ({ children }) => {
  return (
    // TODO: make oauth client for google login and link here
    <Button
      variant="outlined"
      startIcon={<FcGoogle />}
      color="primary"
      sx={{
        width: 250,
        height: 40,
        fontSize: 13,
        bgcolor: "#ffffff",
      }}
      size="small"
      disableElevation
    >
      {children}
    </Button>
  );
};

export default GoogleButton;
