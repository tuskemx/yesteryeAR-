import React, { Component } from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground
} from "react-native";

import Maps from "./Maps";
import Home from "./Home.js";

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        renderMap: false,
        correctInput: true,
        hidden: true
    };
    handleSubmit = () => {
        this.props.changeStateBool(true);
    };
    handleLogin = () => {
        if (this.state.username === "J" && this.state.password === "J") {
            this.props._getExperienceButtonOnPress();
        } else {
            this.setState({ correctInput: false });
        }
    };
    render() {
        return (
            <ImageBackground
                source={require("./background.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <View>
                    {!this.state.renderMap && (
                        <View style={styles.container}>
                            <View style={styles.containerform}>
                                <Text style={styles.formtext}>Username</Text>
                                <TextInput
                                    placeholder="UserName ..."
                                    placeholderTextColor="white"
                                    onChangeText={username =>
                                        this.setState({ username, correctInput: true })
                                    }
                                    value={this.state.username}
                                    style={styles.form}
                                />
                                <Text style={styles.formtext}>Password</Text>
                                <TextInput
                                    placeholder="Password ..."
                                    secureTextEntry={this.state.hidden}
                                    placeholderTextColor="white"
                                    onChangeText={password =>
                                        this.setState({ password, correctInput: true })
                                    }
                                    style={styles.form}
                                    value={this.state.password}
                                />
                                {!this.state.correctInput && (
                                    <Text style={styles.error}>
                                        Incorrect password or username
                  </Text>
                                )}
                            </View>
                            <View style={{ marginBottom: 2 }}>
                                <TouchableOpacity
                                    style={styles.buttonstyle}
                                    activeOpacity={0.5}
                                    onPress={this.handleLogin}
                                >
                                    <Text style={styles.text}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonstyle}
                                    onPress={this.handleSubmit}
                                >
                                    <Text style={styles.text}>Sign-up </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 50,
        padding: 20,
        borderRadius: 50,
        opacity: 30
    },
    buttonstyle: {
        marginTop: 10,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1
    },
    text: {
        alignSelf: "center",
        color: "black",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#ffffff"
    },
    form: {
        fontSize: 12,
        backgroundColor: "black",
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        color: "white"
    },
    formtext: {
        fontSize: 18,
        color: "black",

        fontWeight: "900"
    },
    containerform: {
        borderRadius: 20,
        backgroundColor: "white",
        padding: 10
    },
    error: {
        color: "black"
    },
    textboxfield: {
        color: "white"
    }
});