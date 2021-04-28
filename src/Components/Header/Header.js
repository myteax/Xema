import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appstyle: {
    backgroundColor: "white",
  },

  title: {
    flexGrow: 1,
    textAlign: "left",
    color: "rgb(121, 169, 240)",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appstyle}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              XEMES RPT
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
