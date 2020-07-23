import React, { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import {googleAPI} from "../../Constants/google";

const Map = () => {
    const [ myMap, setMyMap ] = useState(null);
    const [ center, setCenter ] = useState({ lat: 29.972065, lng: -90.111533 });

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleAPI
    });

    const [ id, setId ] = useState(0);
    const [ markers, setMarkers ] = useState([]);
    const [ drawMarker, setDrawMarker ] = useState(false);

    const addMarker = (coords) => {
        setId((id)=>id+1);
        setMarkers((markers) => markers.concat([{coords, id}]) )
    }


    const renderMap = () => (

       <div>
        <GoogleMap
            mapContainerStyle={{
                height: "50vh",
                width: "50vw",
                margin: "auto",

            }}
            zoom={10}
            center={center}
            onLoad={map => setMyMap(map)}
            onClick={(e)=> drawMarker ? addMarker(e.latLng.toJSON()) : null}
        >

            {markers ? (
                markers.map((marker) => {
                    return (
                        <Marker
                            key={marker.id}
                            draggable={drawMarker}
                            position={marker.coords}
                            onDragEnd={e => marker.coords = e.latLng.toJSON()}
                        />
                    )
                })
            ) : null }


        </GoogleMap>
           <button

               type="button"
               style={{backgroundColor: drawMarker ? "green" : null}}
               onClick={()=>{setDrawMarker(()=>!drawMarker)}}
           >ADD & DRAG</button>
           <button
               type="button"
               onClick={()=>setMarkers([])}

           >CLEAR MAP</button>

       </div>

    )

    return isLoaded ? renderMap() : null;
}

export default Map
