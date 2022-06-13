import React from "react";
import Company from "./Company";
import companyData from "../data/db.json";
import { useState, useEffect } from "react";

export default function Home() {
    //  to pass data in react
//   const [data, setData] = useState([]);

    // I know a lot of companies want to test these skills just wanted to right it here in case
    // async await to fetch data from API
//   const getData = async () => {
//     const api_URL = "";
//     const res = await fetch(api_URL);
//     const json = await res.json();
//     setData(json.results);
//   };

//   I used set interval method as the data is changing for the company so might be new udpates coming in after 1 min
//   useEffect(() => {
//     getData();

//     const interval = setInterval(() => {
//       getData();
//       console.log("1 min update");
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div>
      {companyData.map((mydata, index) => (
        <Company key={index} data={mydata} />
      ))}
    </div>
  );
}
