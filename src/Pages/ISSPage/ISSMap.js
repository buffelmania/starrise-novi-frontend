import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './ISSStyles.css';
import L from "leaflet";

import ISSIcon from '../../assets/ISS.png';

function ISSMap() {
    const [issPosition, setISSPosition] = useState({lat: 0, lng: 0});

    useEffect(() => {
        async function getISSPosition() {
            const response = await fetch('http://api.open-notify.org/iss-now.json');
            const data = await response.json();
            setISSPosition({ lat: data.iss_position.latitude, lng: data.iss_position.longitude });
        }
        getISSPosition();
        const interval = setInterval(() => {
            getISSPosition();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const issIcon = L.icon({
        iconUrl: ISSIcon,
        iconSize: [50, 32],
        iconAnchor: [25, 16]
    });

    return (
        <MapContainer center={[41.4, 2.17]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[issPosition.lat, issPosition.lng]} icon={issIcon}>
                <Popup>
                    Huidige positie van het ISS
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default ISSMap;