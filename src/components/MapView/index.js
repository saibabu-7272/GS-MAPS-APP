import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from '../Header'


const position = [20.5937, 78.9629]; 

const MapView = () =>{
  return (
    <div className='home-page'>
        <Header />
        <div className='dashboard'>
        <h1>Map</h1>
        <MapContainer
      center={position}
      zoom={4}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
        </div>
    </div>
    
  )
}  
export default MapView;
