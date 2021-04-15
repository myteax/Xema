import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Button.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Buttons = (props) => {
  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    props.submitHandler();
  };
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={submit}>
        {props.name}
      </Button>
    </div>
  );
};

export default Buttons;
