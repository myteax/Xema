import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import "./ShowPerson.css";

const ShowPerson = () => {
  const [data, setData] = useState("");
  const [datac, setDatac] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const getData = async () => {
    console.log(id);
    await Axios.get(`${process.env.React_App_Server}/companies/${id}/people/`)
      .then((res) => {
        if (res) {
          console.log(res.data);
          setData(res.data);
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
    getCompany();
  };
  const getCompany = async () => {
    await Axios.get(`${process.env.React_App_Server}/companies/${id}/`).then(
      (res) => {
        console.log(res.data);
        setDatac(res.data);
      }
    );
  };

  return (
    <div>
      <div className="crn_spw3d"> People at {datac.name}</div>
      <div className="shp_dk2">
        <ul>
          {data &&
            data
              .slice(0)
              .reverse()
              .map((res) => {
                return (
                  <li key={res._id}>
                    {" "}
                    <a href={`/people/${res._id}`}> {res.name} </a>{" "}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="crn_spw3d">
        <a href={`/company/${datac._id}`}>
          {" "}
          <span className="cp_pwowk3"> Back to {datac.name}</span>
        </a>
      </div>
    </div>
  );
};

export default ShowPerson;
