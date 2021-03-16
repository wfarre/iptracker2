import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import L from "leaflet";
import icon from "../public/images/icon-location.svg";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const mymap = L.map(document.getElementById("mapid")).setView([0, 0], 13);

var greenIcon = L.icon({
  iconUrl: icon,

  iconSize: [30, 40], // size of the icon
  iconAnchor: [13, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([0, 0], { icon: greenIcon }).addTo(mymap);

const tiles = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}",
  {
    foo: "bar",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
);
tiles.addTo(mymap);

export { marker, mymap };
