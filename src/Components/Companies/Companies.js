import React, { useEffect, useState } from "react";
import List from "../Lists/List";
import Axios from "axios";
import "./Companies.css";

const Companies = (props) => {
  const [companyData, setCompanyData] = useState("");
  const [prefresh, setPrefresh] = useState(false);

  useEffect(() => {
    getData();
  }, [props.refresh, prefresh]);

  const prefreshx = () => {
    setPrefresh(!prefresh);
  };

  const getData = async () => {
    console.log(process.env.React_App_Server);
    await Axios.get(`${process.env.React_App_Server}/companies`)
      .then((res) => {
        if (res) {
          console.log(res);
          setCompanyData(res.data);
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  };

  return (
    <div className="com_dju22">
      <div className="com_djik33">Companies</div>

      <div>
        {companyData &&
          companyData
            .slice(0)
            .reverse()
            .map((res, index) => {
              return (
                <>
                  {index === 0 && (
                    <List
                      key={res._id}
                      name={res.name}
                      address={res.address}
                      revenue={res.revenue}
                      phone={res.phone}
                      id={res._id}
                      expand="true"
                      refreshx={prefreshx}
                    />
                  )}
                  {index !== 0 && (
                    <List
                      key={res._id}
                      name={res.name}
                      address={res.address}
                      revenue={res.revenue}
                      phone={res.phone}
                      id={res._id}
                      refreshx={prefreshx}
                    />
                  )}
                </>
              );
            })}
      </div>
    </div>
  );
};

export default Companies;
