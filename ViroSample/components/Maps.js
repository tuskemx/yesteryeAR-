import MapView from "react-native-maps";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 53.480759,
          longitude: -2.242631,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      />
      <Text>Maps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Maps;
