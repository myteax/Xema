import React, { useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Input from "../FormComponents/Input";
import Buttons from "../FormComponents/Buttons";
import Alert from "@material-ui/lab/Alert";

import "./Createnewc.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Createnewc = (props) => {
  const classes = useStyles();
  const [alert, showAlert] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [revenue, setRevenue] = useState("");
  const [phone, setPhone] = useState("");

  const changeHandler = (id, value) => {
    switch (id) {
      case "name":
        setName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "revenue":
        if (isNaN(value)) {
          setRevenue(0);
        } else {
          setRevenue(value);
        }

        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    sendData();
    {
      props.refresh();
    }
  };

  const sendData = async () => {
    await Axios.post(`${process.env.React_App_Server}/companies`, {
      name: name,
      address: address,
      revenue: revenue,
      phone: phone,
    })
      .then((res) => {
        if (res) {
          console.log(res);
          showAlert(true);
          resetValues();
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  };

  const resetValues = () => {
    setName("");
    setAddress("");
    setRevenue("");
    setPhone("");
  };

  return (
    <div>
      <Paper elevation={0} />
      <div className="crn_spw3d"> Create new company </div>
      <div style={{ marginTop: "5px", marginBottom: "5px" }}>
        {alert && <Alert severity="success">Information Saved!</Alert>}
      </div>
      <div className="crn_sow9">
        <Input
          label="Name"
          default="Enter Company Name"
          id="name"
          fChange={changeHandler}
          dvalue={name}
        />
        <Input
          label="Address"
          default="Enter Company Address"
          id="address"
          fChange={changeHandler}
          dvalue={address}
        />
        <Input
          label="Revenue"
          default="Enter Company Revenue"
          id="revenue"
          fChange={changeHandler}
          dvalue={revenue}
        />
        <Input
          label="Phone"
          default="Enter Company Phone"
          id="phone"
          fChange={changeHandler}
          dvalue={phone}
        />
        <Buttons name="Save" submitHandler={submitHandler} />
      </div>

      <Paper />
    </div>
  );
};

export default Createnewc;
