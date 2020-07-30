import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import './App.css';
import mapStyle from "./mapStyle"




const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 41.363218,
  lng: 2.135348,
};

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
}

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCiOVO_Qd_sDWcbubFstyBILb6_RKBXHCc",
    libraries,
  })

  if (loadError) return " Error loading maps";
  if (!isLoaded) return "Loading Maps"
  return (
    <div className="App">
      <h1>FunFood </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
        options={options}
      ></GoogleMap>

    </div>
  );
}


