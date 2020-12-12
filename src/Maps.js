import React, { useEffect } from 'react'
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Maps() {
    useEffect(() => {
        var mymap = L.map("mapid").setView(
            [54.90406635640633, 23.95781618497057],
            13
        );
        mymap.invalidateSize()
        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
            {
                maxZoom: 18,
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
            }
        ).addTo(mymap);
        var marker = L.marker([54.90406635640633, 23.95781618497057]).addTo(mymap);
        marker.bindPopup("<b>Informatikos fakultetas</b><br>11 Rumai.").openPopup();
    }, [])
    return (
        <div>
            <div id="mapid"></div>
        </div>
    )
}
