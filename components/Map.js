import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

const currentLocation = {
  coords: {
    longitude: -118.0292256922629,
    latitude: 34.13063609510113,
  }
}

const Map = () => {
  return <MapView 
      style={styles.map} 
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }} 
    >
      <Circle 
        center={currentLocation.coords} 
        radius={30} 
        strokeColor="rgba(158, 158, 255, 1.0)" 
        fillColor="rgba(158, 158, 255, 0.3)" />
    </MapView>
};

const styles = StyleSheet.create({
    map: {
      height: "100%"
    }
});
  
export default Map;