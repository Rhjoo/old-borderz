import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  });

  const [city, setCity] = useState("");

  const getLocation = async () => {
    let position = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  const reverseLocation = () => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCity(data.address.city);
      }
    );
  };

  useEffect(() => {
    getLocation();
    reverseLocation();
  }, []);

  return (
    <>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation={true}
        showsCompass={true}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }} 
      />
      <View>
        <Text style={styles.text}>
          {city}
        </Text>
      </View>
    </>
  )  
};

const styles = StyleSheet.create({
  map: {
    height: "90%"
  },
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});
  
export default Map;