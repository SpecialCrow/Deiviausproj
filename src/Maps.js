import React, { useEffect } from "react";
import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";
export default function Maps(props) {
  const position = [
    props.geo != null && props.model != null && props.model.cod != "404"
      ? props.geo.results[0].geometry.lat
      : 54.90406635640633,
    props.geo != null && props.model != null && props.model.cod != "404"
      ? props.geo.results[0].geometry.lng
      : 23.95781618497057,
  ];
  return (
    <div>
      {/* <div id="mapid"></div> */}
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          {props.model != null && props.model.cod != "404" ? (
            <Popup style={{ width: "600px" }}>
              <h2>{props.city}</h2>
              <p> Weather: {props.model.weather.map((i) => i.main)}</p>
              <p> Temperature: {Math.round(props.model.main.temp - 273)}</p>
              <p>Feels Like: {Math.round(props.model.main.feels_like - 273)}</p>
            </Popup>
          ) : null}
        </Marker>
      </MapContainer>
    </div>
  );
}
