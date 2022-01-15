import React from "react";
import { Button, Grid } from "@material-ui/core";

const AuthButtons = () => (
  <Grid container spacing={2} style={{width: "100%"}}>  
    <Grid item xs={6} style={{ color: "white" }}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        href={`#/register`}
      >
        Register
      </Button>
    </Grid>
    <Grid item xs={6}>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        href={`#/login`}
      >
        Log In
      </Button>
    </Grid>
  </Grid>
);

export default AuthButtons;
