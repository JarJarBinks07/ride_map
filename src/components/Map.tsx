import React from 'react';
import {GoogleMap, MarkerF} from "@react-google-maps/api";

const defaultCenter = {lat: -33, lng: 151}

export const Map = () => {
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
            <MarkerF
                position={{lat: -33, lng: 151}}
            >
            </MarkerF>
        </GoogleMap>
    )
}
