import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Input.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  txt: {
    marginBottom: "2px",
    marginTop: "2px",
  },
}));

const Input = (props) => {
  const classes = useStyles();

  const changeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    props.fChange(id, value);
  };

  return (
    <div className={classes.txt}>
      <TextField
        size="small"
        className={classes.txt}
        id={props.id}
        label={props.label}
        placeholder={props.default}
        variant="outlined"
        onChange={changeHandler}
        value={props.dvalue}
      />
    </div>
  );
};

export default Input;
