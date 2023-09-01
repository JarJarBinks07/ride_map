import React from 'react';
import {GoogleMap, MarkerF} from "@react-google-maps/api";

const defaultCenter = {lat: -33, lng: 151}
export type MarkerType = { lat: number, lng: number }

export const Map = ({markers}: { markers: Array<MarkerType> }) => {
    return (
        <GoogleMap
            mapContainerClassName='w-full h-full'
            mapTypeId='roadmap'
            zoom={5}
            center={defaultCenter}
            options={{
                gestureHandling: 'greedy',
                disableDefaultUI: true,
                streetViewControl: false,
                mapTypeId: 'roadmap',
            }}
            mapContainerStyle={{
                width: '100%',
                height: '100vh'
            }}>
            {markers.map((marker) => {
                return <MarkerF
                    key={marker}
                    position={marker}
                >
                </MarkerF>
            })}

        </GoogleMap>
    )
}
