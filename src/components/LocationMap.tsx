import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const LocationMap = () : JSX.Element => {

    return(
        <div id="mapid" style={{ height: '180px' }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.388, 2.158]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};