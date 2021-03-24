import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface IPropsLocationMap{
    lat: number,
    lgt: number,
    city:string
}

export const LocationMap = ({lat,lgt,city}:IPropsLocationMap) : JSX.Element => {

    return(
            <div id='mapid' style={{margin: 'auto', width: '100%', padding: '10px'}}>
                <MapContainer center={[lat, lgt]} zoom={2} scrollWheelZoom={true} style={{minHeight: '600px'}}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[lat, lgt]}>
                    <Popup>
                        {city}
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
    )
};