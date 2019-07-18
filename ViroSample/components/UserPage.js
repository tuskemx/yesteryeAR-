import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    Button
} from "react-native";

const styles = StyleSheet.create({
    imageProfile: {
        alignSelf: "center",
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    textName: {
        alignSelf: "center",
        fontSize: 32,
        paddingBottom: 10
    },
    textEmail: {
        alignSelf: "center",
        fontSize: 20,
        paddingBottom: 10
    },

    ImageCog: {
        alignSelf: "center",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        right: 1
    },
    ButtonView: {
        borderWidth: 10,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "black",
        padding: 10
    }
});

class UserPage extends Component {
    state = {
        homepage: false
    };
    render() {
        return (
            <View>
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={this.props.backhome}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("./back.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={{}}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("./logout.png")}
                        />
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    style={styles.imageProfile}
                    source={require("./Profile-ICon.png")}
                />
                <Text style={styles.textName}>Josh Kain</Text>
                <Text style={styles.textEmail}>joshkain@live.com</Text>
                <Text style={styles.textEmail}>Locations visted: 3</Text>
                <Image style={styles.ImageCog} source={require("./settings.png")} />
            </View>
        );
    }
}

export default UserPage;