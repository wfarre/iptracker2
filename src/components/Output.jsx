import React from "react";

function Output(props) {
  return (
    <div className="output container">
      <div className="ipbox box">
        <h2>IP ADDRESS</h2>
        <p>{props.ip}</p>
      </div>
      <div className="border"></div>
      <div className="box">
        <h2>LOCATION</h2>
        <p>{props.city}</p>
        <p>{props.postalCode}</p>
      </div>
      <div className="border"></div>
      <div className="box">
        <h2>TIMEZONE </h2>
        <p>UTC {props.timezone}</p>
      </div>
      <div className="border"></div>
      <div className="box">
        <h2>ISP</h2>
        <p>{props.isp}</p>
      </div>
    </div>
  );
}

export default Output;
