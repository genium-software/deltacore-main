import { Typography } from "@mui/material";

const PageHeader = ({ children }) => {
  return (
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      mt="10px"
      margin="auto"
      textAlign="center"
      sx={{ letterSpacing: "-1px", fontSize: "28px" }}
    >
      {children}
    </Typography>
  );
};

export default PageHeader;
