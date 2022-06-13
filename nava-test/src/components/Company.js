import React, { useState } from "react";

export default function Company({ data, index }) {
  const [show, setShow] = useState(false);

  function nFormatter(num) {
    if (num >= 1000000) {
      return "$" + (num / 1000000).toFixed(2) + "M";
    }
    if (num >= 1000) {
      return "$" + (num / 1000).toFixed(2) + "K";
    }
    return num;
  }

  return (
    <>
      <div className="container" key={index}>
        <h4>{data.company_name}</h4>
        <ul className="box-description">
          <div>
            <li>State</li>
            <strong>{data.company_state}</strong>
          </div>
          <div>
            <li>Employees</li>
            <strong>{data.employee_count}</strong>
          </div>
          <div>
            <li>Year</li>
            <strong>{data.plan_year}</strong>
          </div>
        </ul>
        <div className="button-container">
          <button type="button" onClick={() => setShow(!show)}>
            {show === false ? (
              <span> show more &#x21e9;</span>
            ) : (
              <span>show less &#x21e7;</span>
            )}
          </button>
        </div>
        {show && (
          <div className="show-box">
            <p>
              <strong>Premium:</strong> {nFormatter(data.premium_sum)}
            </p>
            <p>
              <strong>Participants:</strong> {data.participants_sum}
            </p>
            <p>
              <strong>Broker Commissions: </strong>
              {nFormatter(data.broker_commission_sum)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
