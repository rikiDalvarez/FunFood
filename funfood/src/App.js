import React, { useState, useEffect } from "react";
import ApiService from "./ApiService";

import Sidebar from "./Sidebar";



// import { markerTiger } from './assets/tiger_marker.svg';

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
import '@reach/combobox/styles.css';

import './App.css';
import mapStyle from "./mapStyle"

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const libraries = ["places"];

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
  const [restaurants, setRestaurants] = useState([]);
  const [selected, setSelected] = useState(null);
  // const [address, setAddress] = useState(null)

  useEffect(() => {
    ApiService.getRestaurants()
      .then((restaurantList) => {
        setRestaurants(restaurantList)
      });

  }, [])


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  })

  //option to set new restaurant by clicking in the map a new location. create a button(problably a component with button and the option of add new restaurant)
  // const onMapClick = React.useCallback((e) => {
  //   setAddress((current) => [{ lat: e.latLng.lat(), lng: e.latLng.lng() }]);
  // }, [])

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);

  }, []);


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (loadError) return " Error loading maps";
  if (!isLoaded) return "Loading Maps"

  return (
    <div className="App">

      <h1>FunFood </h1>

      <Search panTo={panTo} />
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >

        {restaurants.map(restaurant => <Marker
          key={restaurant.name}
          position={{
            lat: restaurant.position.lat,
            lng: restaurant.position.lng
          }}

          icon={{
            url: '/tiger_marker.svg',
            scaledSize: new window.google.maps.Size(40, 40)
          }}
          onClick={() => {
            setSelected(restaurant);
          }}
        />)}


        {selected ? (<InfoWindow position={{
          lat: selected.position.lat,
          lng: selected.position.lng,
        }}

          onCloseClick={() => {
            setSelected(null)
          }}>

          <div className="restaurant__card">
            <h2 className="restaurant__card__name">{selected.name} </h2>
            {/* add image from database here/ possible create a component to simplify the props for each topic. */}
            <img
              className="restaurant__card__image"
              src={selected.image} alt="photo of the restaurant" />
            <div className="restaurant__card__options" >{selected.kidsArea ? <div>
              <img
                className="restaurant__card__options__icon"
                src="playground-3.svg" alt="playground" />
              <h2 className="restaurant__card__text"> we have fun area </h2> </div> : "⚠︎ working on our area"}
            </div>
            <div className="restaurant__card__options" >{selected.toys ? <div>
              <img
                className="restaurant__card__options__icon"
                src="toy-3.svg" alt="toys" />
              <h2 className="restaurant__card__text"> we have fun toys </h2> </div> : "⚠︎ working on our toys"}
            </div>
            <div className="restaurant__card__options" >{selected.toys ? <div>
              <img
                className="restaurant__card__options__icon"
                src="menu-3.svg" alt="menu" />
              <h2 className="restaurant__card__text"> we have fun menu </h2> </div> : "⚠︎ working on our menu"}
            </div>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
      <div className="restaurant__info">
        <Sidebar />
        {/* LOGIN AND FILTER FUNCTIONALITIES.<Info ></Info> create a info restaurant on the left side, with pictures, addres,  */}

      </div>
    </div>
  );
}


function Locate({ panTo }) {
  return <button className="locate"
    onClick={() => {
      navigator.geolocation.getCurrentPosition((position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }, () => null)
    }}>
    <img src="compass.svg"
      alt="compass - locate me" />
  </button>

}
function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {

      location: {
        lat: () => 41.363218,
        lng: () => 2.135348,
      },

      radius: 200 * 1000,
    }
  })
  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions()
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log("error!", error)
          }

        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description} />
            ))}
          </ComboboxList>
        </ComboboxPopover>

      </Combobox>

    </div>
  )
}
