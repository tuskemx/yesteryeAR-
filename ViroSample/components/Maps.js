import MapView from 'react-native-maps';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

// const Maps = () => {

export default class Maps extends Component {
  state = {
    color: '#FF0000'
  };

  handlePress = () => {
    // this.props.addNinja();
    this.setState({
      color: '#959595'
    });
  };

  render() {
    // let { func } = this.props;
    return (
      <>
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
        </View>
        <View>
          <Button
            // onPress={this.handlePress}
            onPress={this.props.getExperienceButtonOnPress}
            title="Back"
            color={this.state.color}
            accessibilityLabel="Navigate back a page"
          />
          <Text>Maps</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

// export default Maps;
