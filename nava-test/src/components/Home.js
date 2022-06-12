import React from "react";
import Company from "./Company";
import companyData from "../data/db.json";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const api_URL = "";
    const res = await fetch(api_URL);
    const json = await res.json();
    setData(json.results);
  };

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
      console.log("1 min update");
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {companyData.map((mydata, index) => (
        <Company index={index} data={mydata} />
      ))}
    </div>
  );
}
