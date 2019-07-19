import React, { Component } from "react";
import Maps from "./Maps";
import UserPage from "./UserPage";
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Button,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView
} from "react-native";

const styles = StyleSheet.create({
    title: {
        color: 'black',
        justifyContent: 'center',
        fontSize: 15,
        backgroundColor: 'white'
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'black',
        textAlign: 'left',
        fontSize: 16,
        margin: 10,
        padding: 5
    },

    button: {
        width: '40%',
        height: '10%',
        alignSelf: 'center'
    },

    rightIcon: {
        alignSelf: 'flex-end'
    },
    contentContainer: {
        paddingBottom: 20
    },
    card: {
        marginVertical: 10
    },
    buttonstyle: {
        color: 'red'
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        padding: 5
    },
    scroll: {
        paddingBottom: 5,
        padding: 10,
        borderWidth: 5
    },
    border: {
        borderColor: 'white'
    },
    title2: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    }
});
export default class Homepage extends Component {
    state = {
        UserPage: false
    };
    handleCardAssize = event => {
        let obj = {
            latitude: 53.492021,
            longitude: -2.246167,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        const x = this.props.getMapWithCoords("MAPCOORDS", obj);
        console.warn(x);
        return (
            <TouchableOpacity onPress={x()}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require("./back.png")}
                />
            </TouchableOpacity>
        );
    };

    handleCardVictoria = event => {
        let obj = {
            latitude: 53.487284,
            longitude: -2.242343,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        const x = this.props.getMapWithCoords("MAPCOORDS", obj);
        console.warn(x);
        return (
            <TouchableOpacity onPress={x()}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require("./back.png")}
                />
            </TouchableOpacity>
        );
    };

    handleCardHulme = event => {
        let obj = {
            latitude: 53.46918,
            longitude: -2.2403,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        const x = this.props.getMapWithCoords("MAPCOORDS", obj);
        console.warn(x);
        return (
            <TouchableOpacity onPress={x()}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require("./back.png")}
                />
            </TouchableOpacity>
        );
    };

    handleCardPicadilly = event => {
        let obj = {
            latitude: 53.46918,
            longitude: -2.2403,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        const x = this.props.getMapWithCoords("MAPCOORDS", obj);
        console.warn(x);
        return (
            <TouchableOpacity onPress={x()}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require("./back.png")}
                />
            </TouchableOpacity>
        );
    };
    handleCardSmiths = event => {
        let obj = {
            latitude: 53.47696,
            longitude: -2.274452,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        const x = this.props.getMapWithCoords("MAPCOORDS", obj);
        console.warn(x);
        return (
            <TouchableOpacity onPress={x()}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require("./back.png")}
                />
            </TouchableOpacity>
        );
    };

    userPage = event => {
        this.setState({ UserPage: true });
    };
    backhome = event => {
        this.setState({ UserPage: false });
    };

    render() {
        return (
            <View>
                {this.state.UserPage && (
                    <View>
                        <UserPage
                            home={this.props.getExperienceButtonOnPress}
                            backhome={this.backhome}
                            unset={this.props.unset}
                        />
                    </View>
                )}
                {!this.state.UserPage && (
                    <View>
                        <ScrollView style={styles.scroll}>

                            <View style={styles.navbar}>
                                <TouchableOpacity onPress={() => { this.props.unset() }}>
                                    <Image
                                        style={{ width: 50, height: 50 }}
                                        source={require("./back.png")}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.userPage}>
                                    <Image
                                        ref="USER_PAGE"
                                        style={{ width: 50, height: 50 }}
                                        source={require("./image.png")}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.props.goMap}>
                                    <Image
                                        style={{ width: 50, height: 50 }}
                                        source={require("./nav.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.title2}>Locations Near You</Text>

                            <View style={styles.border}>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.handleCardAssize();
                                        }}
                                    >
                                        <ImageBackground
                                            source={require("./Assize.jpg")}
                                            style={{ width: 400, height: 200 }}
                                        >
                                            <Text style={styles.title}>Manchester Assize Courts, 1946</Text>
                                            {/* <Text style={styles.text}>
              The Manchester Assize Courts were law courts on Great Ducie Street
              in the Strangeways district of Manchester, England. It was 279 ft
              (85 m) tall and from 1864 to 1877 the talEnd:lest building in
              Manchester. Widely admired,[1] it has been referred to as one of
              Britain's 'lost buildings'.{" "}
            </Text> */}
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.handleCardVictoria();
                                        }}
                                    >
                                        <ImageBackground
                                            source={require("./victoria.jpg")}
                                            style={{ width: 400, height: 200 }}
                                        >
                                            <Text style={styles.title}>Victoria Station, 1949</Text>
                                            {/* <Text style={styles.text}>
            The Manchester and Le eds Railway (M&LR) was founded in 1836 and the
            company began building its line between Manchester and Leeds in
            1837. Originally its line terminated at Manchester Oldham Road which
            opened on 3 July 1839. The company realised it would be advantageous
            to join its line to the Liverpool and Manchester Railway (L&MR)
            creating a through route from Liverpool to Yorkshire with a joint
            station serving the centre of Manchester. */}
                                            {/* </Text> */}
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.handleCardHulme();
                                        }}
                                    >
                                        <ImageBackground
                                            source={require("./hulmefire.jpg")}
                                            style={{ width: 400, height: 200 }}
                                        >
                                            <Text style={styles.title}>Opal Halls MMU, 1957</Text>
                                            {/* <Text style={styles.text}>
            MMU halls are now build on the site after a serious fire took place
            causing the building to dramatically collapse.
          </Text> */}
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.handleCardPicadilly();
                                        }}
                                    >
                                        <ImageBackground
                                            source={require("./piccadilly.jpg")}
                                            style={{ width: 400, height: 200 }}
                                        >
                                            <Text style={styles.title}>Picadilly Gardens, 1962</Text>
                                            {/* <Text style={styles.text}>
            Before 1755: The area was occupied by water-filled clay pits called
            the Daub Holes. The Lord of the Manor donated the site and the pits
            were replaced by a fine ornamental pond. 1914: After several years
            in which the Manchester Corporation tried to decide how to develop
            the site, it was left and made into the largest open green space in
            the city centre. The Manchester Public Free Library Reference
            Department was housed on the site for a number of years before the
            move to Manchester Central Library. The sunken garden was a remnant
            of the hospital's basement.
          </Text> */}
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.handleCardSmiths();
                                        }}
                                    >
                                        <ImageBackground
                                            source={require("./smiths.jpg")}
                                            style={{ width: 400, height: 200 }}
                                        >
                                            <Text style={styles.title}>The Smiths, Salford Boys Club, 1985</Text>
                                            {/* <Text style={styles.text}>
            Before 1755: The area was occupied by water-filled clay pits called
            the Daub Holes. The Lord of the Manor donated the site and the pits
            were replaced by a fine ornamental pond. 1914: After several years
            in which the Manchester Corporation tried to decide how to develop
            the site, it was left and made into the largest open green space in
            the city centre. The Manchester Public Free Library Reference
            Department was housed on the site for a number of years before the
            move to Manchester Central Library. The sunken garden was a remnant
            of the hospital's basement.
          </Text> */}
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                )}
            </View>
        );
    }
}