import React, {useState} from "react";
import ReactMapGl from "react-map-gl"

export function MapScreen({navigation}:{navigation: any})  {
    const [viewport, setViewPort] = useState({
        latitude: 59.85327892882451,
        longitude: 11.102734024705288,
        zoom: 10,
        width: "100vw",
        height: "100vh"

    })
    return <div>
        <ReactMapGl {...viewport}>
            markers here
        </ReactMapGl>
    </div>



}