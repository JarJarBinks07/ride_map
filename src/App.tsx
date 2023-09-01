import './App.css'
import {useRef, useState} from "react";
import {LoadScript} from "@react-google-maps/api";
import {Map, MarkerType} from "./components/Map";
import {MapInput} from "./components/MapInput";
import {AddButton} from "./components/AddButton";

const google_api = "AIzaSyD7u-mIFJZVbQ-20sNfrABECqJbgTvNxr8";

function App() {
    const [visitedPlaces, setVisitedPlaces] = useState<Array<MarkerType>>([]);
    const [selectedPlace, setSelectedPlace] = useState<MarkerType | null>();

    const inputRef = useRef<any>(null);

    const handlePlaceChanged = () => {
        const place = inputRef.current.getPlace()
        if (place) {
            setSelectedPlace({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            })
        }
    };

    const handlePlaceAdd = () => {
        if (selectedPlace) {
            setVisitedPlaces(prevState => [...prevState, selectedPlace])
            setSelectedPlace(null)
        }
    }

    return (
        <LoadScript googleMapsApiKey={google_api} libraries={["places"]}>
            <MapInput inputRef={inputRef} onPlaceChanged={handlePlaceChanged}/>
            <AddButton onClick={handlePlaceAdd} isVisible={Boolean(selectedPlace)}/>
            <Map markers={visitedPlaces}/>
        </LoadScript>
    );
}

export default App
