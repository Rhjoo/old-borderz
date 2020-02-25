import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  });

  const getLocation = async () => {
    let position = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <MapView 
      style={styles.map} 
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      followsUserLocation={true}
      showCompass={true}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }} 
    />
};

const styles = StyleSheet.create({
    map: {
      height: "100%"
    }
});
  
export default Map;