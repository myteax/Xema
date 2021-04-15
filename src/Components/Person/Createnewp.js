import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "../FormComponents/Input";
import Alert from "@material-ui/lab/Alert";
import Axios from "axios";
import Buttons from "../FormComponents/Buttons";
import "./Createnewp.css";

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

const Createnewp = () => {
  const classes = useStyles();
  const [alert, showAlert] = useState(false);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sel, setSel] = useState("Select Company");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log(process.env.React_App_Server);
    await Axios.get(`${process.env.React_App_Server}/companies`)
      .then((res) => {
        if (res) {
          console.log(res);
          setData(res.data);
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  };

  const changeHandler = (id, value) => {
    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "scompany":
        setSel(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    sendData();
    {
      // props.refresh();
    }
  };

  const sendData = async () => {
    await Axios.post(`${process.env.React_App_Server}/person`, {
      name: name,
      email: email,
      companyId: sel,
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
    setEmail("");
  };

  return (
    <div>
      <div>
        <Paper elevation={0} />

        <div className="crn_spw3d"> Create new Person </div>
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
            label="Email"
            default="Email"
            id="email"
            fChange={changeHandler}
            dvalue={email}
          />
          <select
            name="select"
            id="scompany"
            onChange={(e) => {
              setSel(e.target.value);
            }}
            className="crep_djul9"
          >
            <option>{sel}</option>
            {data &&
              data
                .slice(0)
                .reverse()
                .map((res) => {
                  return (
                    <option key={res._id} value={res._id}>
                      {res.name}
                    </option>
                  );
                })}
          </select>
          <Buttons name="Save" submitHandler={submitHandler} />
        </div>

        <Paper />
      </div>
    </div>
  );
};

export default Createnewp;
