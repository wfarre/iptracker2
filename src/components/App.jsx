import React, { useState } from "react";
import Footer from "./Footer.jsx";
import Heading from "./Heading.jsx";
import Output from "./Output.jsx";
import Map from "./Map.jsx";
import { mymap, marker } from "../index.js";

var http = require("http");

function App() {
  const [ip, setIp] = useState("");

  const [adress, setAdress] = useState({
    city: "",
    postalCode: "",
    timeZone: "",
    isp: ""
  });

  function getAdress(ip) {
    var api_url = "https://geo.ipify.org/api/v1?";
    var api_key = process.env.REACT_APP_API_KEY;

    var url = api_url + "apiKey=" + api_key + "&ipAddress=" + ip;

    http
      .get(url, function (response) {
        var str = "";
        response.on("data", function (data) {
          const addressData = JSON.parse(data);
          setAdress({
            city: addressData.location.city,
            postalCode: addressData.location.postalCode,
            timeZone: addressData.location.timezone,
            isp: addressData.isp
          });
          mymap.setView([addressData.location.lat, addressData.location.lng]);
          marker.setLatLng([
            addressData.location.lat,
            addressData.location.lng
          ]);
        });

        // response.on("data", function (chunk) {
        //   str += chunk;
        // });
        // response.on("end", function () {
        //   console.log(str);
        // });
      })
      .end();
  }

  function ipSetting(newInput) {
    setIp(newInput);
    getAdress(newInput);
  }

  // console.log("coordinates " + latLng);
  // const submitButton = document.querySelector(".submitButton");
  // submitButton.addEventListener("click", function (event) {
  //   console.log(event);

  // });

  return (
    <div>
      <Heading ipCatch={ipSetting} />
      <Output
        ip={ip}
        city={adress.city}
        postalCode={adress.postalCode}
        timezone={adress.timeZone}
        isp={adress.isp}
      />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
// export { latLng };
