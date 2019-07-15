import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'

import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, Vibration, Image } from 'react-native';
import PlaceInfo from './PlaceInfo';





// const Maps = () => {

export default class Maps extends Component {
  state = {
    color: '#FF0000',
    placeInfo: '',
    err: '',
    isPopupTrue: true
  };

  handlePress = () => {
    // this.props.addNinja();
    this.setState({
      color: '#959595'
    });
  };

  componentDidMount() {


    Vibration.vibrate();
    Geolocation.getCurrentPosition((info) => {
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,

      });
    });



    setTimeout(() => {

    }, 5 * 1000)

  }

  markerClick = (placeInfo) => {

    setTimeout(() => {
      this.setState({ placeInfo: placeInfo })
    }, 5 * 100)

    this.setState({ isPopupTrue: false })
  }

  ChangeMapState = () => {
    this.setState({ isPopupTrue: true })
  }
  // returnView = () => {
  //   return (
  //     <View>
  //       <Text>hllowdw</Text>
  //     </View>
  //   )
  // }

  render() {
    // let { func } = this.props;
    const piccadilly = {
      latitude: 53.4810, longitude: -2.2369, title: "Piccadilly Gardens, 1952", description: "PICCADILLY GARDENS", visitors: 12, url: 'Piccadilly', visitorNames: ['Sandy', 'Brandy', 'Mandy']
    }

    const hmp = {
      latitude: 53.49175, longitude: -2.24567, title: "Strangeways Prison 1930?", description: "Assize Courts", url: 'Strangeways', visitors: 5
    }

    return (

      <Fragment>

        {this.state.isPopupTrue &&

          <MapView

            provider={"google"}
            followsUserLocation={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            toolbarEnabled={true}
            zoomEnabled={true}
            rotateEnabled={true}
            style={{ flex: 0.7 }}
            region={{
              latitude: 53.480759,
              longitude: -2.242631,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <MapView.Marker coordinate={piccadilly} title={piccadilly.title} description={piccadilly.description}   ><Image resizeMode="contain" style={{ width: 50, height: 50 }} source={require('./piccadilly.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(piccadilly)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>
            <MapView.Marker coordinate={hmp} title={hmp.title} description={hmp.description}><Image resizeMode="contain" style={{ width: 50, height: 50 }} source={require('./Assize1.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(hmp)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>

          </MapView>


        }
        {this.state.isPopupTrue && <View>
          <Text>{this.state.latitude} {this.state.longitude}</Text>
        </View>
        }

        <Button
          // onPress={this.handlePress}
          onPress={this.props.getExperienceButtonOnPress}
          title="Back"
          color={this.state.color}
          accessibilityLabel="Navigate back a page"
        />
        {!this.state.isPopupTrue &&
          <View>
            <PlaceInfo info={this.state.placeInfo} ChangeMapState={this.ChangeMapState} />

          </View>
        }




      </Fragment>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  map: {
    flex: 0.5,
    alignItems: 'center'
  },
  mapView: {
    ...StyleSheet.absoluteFillObject
  }
});



