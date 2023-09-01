
import './App.css'
import {useRef} from "react";
import {Autocomplete, LoadScript} from "@react-google-maps/api";
import {Map} from "./components/Map";

const google_api = "AIzaSyD7u-mIFJZVbQ-20sNfrABECqJbgTvNxr8";

function App() {
  const inputRef = useRef<any>(null);

  const handlePlaceChanged = () => {
    console.log(inputRef.current.value);
  };

  return (
      <LoadScript googleMapsApiKey={google_api} libraries={["places"]}>
        <Autocomplete onPlaceChanged={handlePlaceChanged} restrictions={{ country: "au" }}>
            <input type="text" ref={inputRef}/>
        </Autocomplete>
        <Map />
      </LoadScript>
  );
}

export default App
