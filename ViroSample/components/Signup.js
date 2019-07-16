import React, { Component } from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String
});
export default class SignUp extends Component {
    state = {
        email: "",
        password: "",
        username: ""
    };
    handleSubmit = () => {
        this.props.changeStateBool(false);
        const value = this.input.getValue();

    };
    render() {
        return (
            <ImageBackground source={require("./background.png")} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Form type={User} ref={type => (this.input = type)} />
                    <View style={{ marginTop: 15 }}>
                        <Button
                            title="Already have an account? Login!"
                            onPress={this.handleSubmit}
                            color="#25a7e3"
                        />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Button
                            title="Sign Up!"
                            color="#25a7e3"
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 50,
        padding: 20,
        backgroundColor: "#ffffff",
        alignItems: "stretch"
    }
});

// Had to add this to App.js on Virosample to get navigation between screens

// _getSignUp() {
//     return (
//         <View>
//             <SignUp />
//         </View>
//     );
// }

// within the _getExperienceSelector()

//     < TouchableHighlight
// underlayColor = { "#FF0000"}
// style = { localStyles.buttons }
// onPress = { this._getExperienceButtonOnPress(SIGNUP_NAVIGATOR_TYPE) }
//     >
//     <Text style={localStyles.buttonText}>SignUp</Text>
// </TouchableHighlight >

//     within the class Virosample  before the render

// this._getSignUp = this._getSignUp.bind(this);

// above the class

// var SIGNUP_NAVIGATOR_TYPE = "SIGNUP";