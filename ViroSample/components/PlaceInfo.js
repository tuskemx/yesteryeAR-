import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, TouchableHighlight, Image } from 'react-native'





export default class PlaceInfo extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        console.warn(this.props.info);
        console.warn(this.props.info.url);
        const names = this.props.info.visitorNames

        return (
            <View>
                {this.props.info.url === 'piccadilly' &&
                    <View>
                        <Image source={require('./piccadilly.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                        <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                        <Text style={{ fontSize: 15 }}>{this.props.info.visitors} visitors </Text>

                        <Text style={{ fontSize: 25 }}>{"\n"}Quite a different affair when compared to the bustling array of bus and tram stops today... </Text>
                    </View>
                }

                {this.props.info.url === 'ancoats' &&
                    <View>
                        <Image source={require('./ancoats.jpg')} resizeMode="contain" style={{ width: 360, height: 250 }} />
                        <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>
                        <Text style={{ fontSize: 15 }}>{this.props.info.visitors} visitors</Text>

                    </View>
                }

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'blue'
                }}>
                    <Text style={{ textDecorationLine: "underline" }} >
                        {"\n"}{"\n"}{"\n"}{"\n"} {"\n"}{"\n"}{"\n"}{"\n"} {"\n"}{"\n"}{"\n"}{"\n"}
                        Visitor List


                    </Text>
                    <Text>  {"\n"}
                        {names}</Text>
                </View>

            </View >

        )
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
