import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";
import { theme } from "../../../theme/default";

const CssTextField = withStyles({
  root: {
    "& label": {
      color: theme.secondary,
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",

      "& fieldset": {
        borderColor: theme.secondary,
      },
      "&:hover fieldset": {
        borderColor: theme.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const Form = () => {
  const { register, errors, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction={"column"} justify="center" spacing={2}>
        <Grid item>
          <CssTextField
            name="name"
            fullWidth
            placeholder="Name"
            inputRef={register({ required: true })}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="secondary"
          />
          {errors.name && "*Name is required"}
        </Grid>
        <Grid item>
          <CssTextField
            name="email"
            fullWidth
            placeholder="E-mail"
            inputRef={register({ required: true })}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            color="secondary"
          />
          {errors.email && "*E-mail is required"}
        </Grid>
        <Grid item>
          <CssTextField
            name="notes"
            fullWidth
            placeholder="Leave us a message!"
            inputRef={register({ required: true })}
            id="outlined-basic"
            label="Notes"
            variant="outlined"
            color="secondary"
            multiline
            rows="5"
            rowsMax="5"
          />
          {errors.email && "*Notes section is required"}
        </Grid>
        <Grid item>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
          >
            send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
