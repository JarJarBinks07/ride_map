import './App.css'
import {useRef, useState} from "react";
import {LoadScript} from "@react-google-maps/api";
import {Map, MarkerType} from "./components/Map";
import {MapInput} from "./components/MapInput";

const google_api = "AIzaSyD7u-mIFJZVbQ-20sNfrABECqJbgTvNxr8";

function App() {
    const [visitedPlaces, setVisitedPlaces] = useState<Array<MarkerType>>([]);

    const inputRef = useRef<any>(null);

    const handlePlaceChanged = () => {

        const place = inputRef.current.getPlace()
        if (place) {
            setVisitedPlaces(prevState => [...prevState, {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }])
        }
    };

    return (
        <LoadScript googleMapsApiKey={google_api} libraries={["places"]}>
            <MapInput inputRef={inputRef} onPlaceChanged={handlePlaceChanged}/>
            <Map markers={visitedPlaces}/>
        </LoadScript>
    );
}

export default App
