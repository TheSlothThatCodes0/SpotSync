import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { icons } from "../../constants";

const Maps = () => {
  const originalLocation = {
    latitude: 28.54747369792765,
    longitude: 77.27284243783566,
  }; // Replace with your coordinates
  const [location, setLocation] = useState(originalLocation);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=${location.latitude},${location.longitude}&radius=5000&type=parking&key=`
    )
    .then((response) => {
      setMarkers(response.data.results);
    });

  const handlePress = () => {
    setLocation(originalLocation);
    mapRef.current.animateToRegion(
      { ...originalLocation, latitudeDelta: 0.005, longitudeDelta: 0.005 },
      1000
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        region={{ ...location, latitudeDelta: 0.005, longitudeDelta: 0.005 }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng,
            }}
            title={marker.name}
          />
        ))}
      </MapView>
      <TouchableOpacity
        onPress={handlePress}
        style={{ position: "absolute", right: 20, bottom: 20 }}
      >
        <Image
          source={icons.map_marker} // Replace with the path to your image
          style={{ width: 40, height: 40 }} // Adjust the size as needed
        />
      </TouchableOpacity>
    </View>
  );
};

export default Maps;
