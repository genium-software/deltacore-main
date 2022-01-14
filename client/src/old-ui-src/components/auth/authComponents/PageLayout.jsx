import { Stack, Box, Container } from "@mui/material";

const PageLayout = ({ children }) => {
  return (
    <Box
      m="auto"
      mt="25px"
      noValidate
      autoComplete="off"
      alignItems="center"
      justifyContent="center"
      width={300}
      height={395}
      display="flex"
      bgcolor="#f6f8fa"
      border={1}
      borderColor="#e2e6eb"
      borderRadius={2}
    >
      <Stack
        spacing={2}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        width={400}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default PageLayout;
