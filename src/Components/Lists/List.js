import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Buttons from "../FormComponents/Buttons";
import "./List.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  typo: {
    backgroundColor: "grey",
  },
  sizy: {
    fontSize: "20px",
    marginLeft: "15px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgb(243, 240, 240)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const List = (props) => {
  const classes = useStyles();
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [revenue, setRevenue] = useState(props.revenue);
  const [phone, setPhone] = useState(props.phone);
  const [expanded, setExpanded] = React.useState("panel1");
  const [fp, setFp] = useState(props.expand);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setFp(!fp);
  };

  const handleOpen = () => {
    setOpen(true);
    props.refreshx();
  };

  const handleClose = () => {
    setOpen(false);
    props.refreshx();
  };

  const submitHandler = (e) => {
    updateData();
    {
      props.refreshx();
    }
  };

  const updateData = async () => {
    await axios
      .put(`${process.env.React_App_Server}/companies/${props.id}`, {
        name: name,
        address: address,
        revenue: revenue,
        phone: phone,
      })
      .then((res) => {
        if (res) {
          handleClose();
        }
      });
  };

  const changeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
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

  const editCompany = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title" className="li_modsk3">
        {props.name}
      </h4>

      <p id="simple-modal-description">
        <form className={classes.root} noValidate autoComplete="off">
          <div className="li_dflex">
            <TextField
              size="small"
              id="name"
              label="Name"
              autoComplete="current-password"
              variant="outlined"
              value={name}
              onChange={changeHandler}
            />
            <TextField
              size="small"
              id="address"
              label="Address"
              value={props.address}
              variant="outlined"
              onChange={changeHandler}
              value={address}
            />
          </div>
          <div className="li_dflex">
            <TextField
              size="small"
              id="revenue"
              label="Revenue"
              value={props.revenue}
              variant="outlined"
              onChange={changeHandler}
              value={revenue}
            />
            <TextField
              size="small"
              id="phone"
              label="phone"
              value={props.phone}
              variant="outlined"
              onChange={changeHandler}
              value={phone}
            />
          </div>
          <div className="li_cenbtn">
            <Buttons name="Update Record" submitHandler={submitHandler} />
          </div>
        </form>
      </p>
    </div>
  );

  return (
    <>
      <div className="li_suw3">
        <Accordion square expanded={fp} onChange={handleChange("panel1")}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div>
              {" "}
              <a href={`/company/${props.id}`}> {props.name} </a>{" "}
            </div>
          </AccordionSummary>
          {/* <AccordionDetails> */}
          <div className="li_DIe89">
            <div className="li_dujw29"> Address: </div>
            <div> {props.address}</div>
            <div className="li_dujw29"> Revenue: </div>
            <div> {props.revenue}</div>
            <div className="li_dujw29">Phone Number:</div>
            <div> {props.phone}</div>
          </div>

          {/* </AccordionDetails> */}
          <div className="li_eui8">
            {" "}
            <div>
              <span className="li_9djr">
                {" "}
                <a href={`/companystaff/${props.id}`}>
                  {" "}
                  People who work here{" "}
                </a>{" "}
              </span>
              <span className="li_idu333">
                <a href="#">
                  {" "}
                  <EditIcon className={classes.sizy} onClick={handleOpen} />
                </a>
                <a href="#">
                  <DeleteIcon className={classes.sizy} />
                </a>
              </span>
            </div>
          </div>
        </Accordion>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {editCompany}
        </Modal>
      </div>
    </>
  );
};

export default List;
