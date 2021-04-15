import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import "./Company.css";
const Company = () => {
  const [data, setData] = useState("");
  const [datac, setDatac] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const getData = async () => {
    await Axios.get(`${process.env.React_App_Server}/companies/${id}/`).then(
      (res) => {
        console.log(res.data);
        setData(res.data);
      }
    );
  };

  return (
    <div>
      <div className="crn_spw3d"> {data.name}</div>
      <div className="shp_dk2">
        <div className="cp_dye3">
          {" "}
          <div className="cp_op92"> Address: </div> {data.address}{" "}
        </div>
        <div className="cp_dye3">
          {" "}
          <div className="cp_op92"> Revenue: </div> {data.revenue}
        </div>
        <div className="cp_dye3">
          {" "}
          <div className="cp_op92"> Phone: </div>
          {data.phone}
        </div>
      </div>
      <div className="crn_spw3d">
        <a href={`/companystaff/${data._id}`}>
          {" "}
          <span className="cp_pwowk3"> People who work here</span>
        </a>
        <a href="/">
          {" "}
          <span className="cp_pwowk3a"> Back to main list</span>
        </a>
      </div>
    </div>
  );
};

export default Company;
