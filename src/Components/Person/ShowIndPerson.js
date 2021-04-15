import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./ShowIndPerson.css";

const ShowIndPerson = () => {
  const [data, setData] = useState("");
  const [datac, setDatac] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  useEffect(() => {
    getCompany();
  }, [data]);

  const getData = async () => {
    console.log(id);
    await Axios.get(`${process.env.React_App_Server}/person/${id}/`)
      .then((res) => {
        if (res) {
          setData(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  };

  const getCompany = async () => {
    await Axios.get(
      `${process.env.React_App_Server}/companies/${data.companyId}/`
    ).then((res) => {
      console.log(res.data);
      setDatac(res.data);
    });
  };

  return (
    <div>
      <div className="crn_spw3d"> {data.name}</div>
      <div className="shp_dk2">
        <div> Email: {data.email} </div>
        <div>
          {" "}
          Company:{" "}
          <a href={`/company/${datac._id}`}>
            {" "}
            {datac ? datac.name : "Loading"}{" "}
          </a>
        </div>
      </div>
      <div
        style={{ textAlign: "left", marginLeft: "20px", paddingBottom: "10px" }}
      >
        {datac && (
          <a href={`/companystaff/${datac._id}/`}>
            {" "}
            Return back to {datac.name}{" "}
          </a>
        )}
        <span className="sip_icons33">
          <EditIcon />
          <span className="sip_spacei3"> </span>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default ShowIndPerson;
