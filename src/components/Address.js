import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
function Address() {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    // add: 5P45+F8 Hope Valley, South Australia,
    lat: 41.3851,
    lng: 2.1734,
  };

  const locations = [
    //   {
    //       name: "Location 1",
    //       location: {
    //           lat:               lng:
    //       }
    //   }
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyB78KVYQRZm06pgGsGlAPLPM75obPtu1G0">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return <Marker key={item.name} position={item.location} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Address;
