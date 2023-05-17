import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function HistoryMap() {
  const woodbineBeachParkingLocation = [43.6627, -79.3094];

  return (
    <MapContainer center={woodbineBeachParkingLocation} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={woodbineBeachParkingLocation}>
        <Popup>This is Beaches Parking</Popup>
      </Marker>
    </MapContainer>
  );
}
