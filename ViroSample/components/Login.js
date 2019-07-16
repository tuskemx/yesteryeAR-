import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native'
import { Input } from 'react-native-elements'
import t from "tcomb-form-native";
import Maps from './Maps';



const Form = t.form.Form;


const User = t.struct({

    username: t.String,
    password: t.String,

})



export default class Login extends Component {
    state = {
        username: 'D',
        password: 'D',
        renderMap: false

    }
    handleSubmit = () => {
        this.props.changeStateBool(true);



    };
    handleLogin = () => {
        const value = this.input.getValue();


        if (value.username === this.state.username && value.password === this.state.password) {
            const navigatorType = 'UNSET'
            console.warn("handleLogin")
            console.warn(this.props._getExperienceButtonOnPress)
            this.props._getExperienceButtonOnPress(navigatorType)

            this.setState({ renderMap: true })


        }

    }
    render() {
        const UNSET = 'UNSET'
        const MAPS_NAVIGATOR_TYPE = 'MAPs'
        return (
            <ImageBackground source={require("./background.png")} style={{ width: '100%', height: '100%' }}>
                < View >




                    {!this.state.renderMap &&

                        <View style={styles.container}>
                            <Form type={User} ref={type => (this.input = type)} style={formstyle} />
                            <View style={{ marginBottom: 15 }}>
                                <TouchableOpacity style={styles.buttonstyle}
                                    activeOpacity={.5} onPress={this.handleLogin}><Text style={styles.text}>Login</Text></TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.buttonstyle} onPress={this.handleSubmit}><Text style={styles.text}>Sign-up </Text></TouchableOpacity>

                        </View >
                    }
                    {
                        this.state.renderMap &&
                        <View>
                            <TouchableHighlight
                                style={styles.buttonstyle}
                                onPress={this.props._getExperienceButtonOnPress(MAPS_NAVIGATOR_TYPE)}
                                underlayColor={'#FF0000'}
                            >
                                <Text style={styles.text}>MAPS</Text>
                            </TouchableHighlight>

                        </View>
                    }

                </View >
            </ImageBackground>


        );
    }
}

const formstyle = {
    opacity: 100,
    backgroundColor: '#ffffff'
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
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1,

    },
    text: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#ffffff'
    }
});
//             <View>

//                 <Input style={this.Styles.input}
//                     autoCapitalize="none"
//                     onSubmitEditing={() => this.passwordInput.focus()}
//                     autoCorrect={false}
//                     keyboardType='email-address'
//                     returnKeyType="next"
//                     placeholder='Email or Mobile Num'
//                     leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
//                     placeholderTextColor='black' />



//                 <Input style={this.Styles.input}
//                     returnKeyType="go"
//                     ref={(input) => this.passwordInput = input}
//                     placeholder='Password'
//                     placeholderTextColor='black'
//                     leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
//                     secureTextEntry />


//             </View>
//         )
//     }
//     Styles = StyleSheet.create({
//         container: {
//             padding: 20
//         },
//         input: {
//             height: 40,
//             backgroundColor: 'rgba(225,225,225,0.2)',
//             marginBottom: 10,
//             padding: 10,
//             color: 'black'
//         },
//         buttonContainer: {
//             backgroundColor: '#2980b6',
//             paddingVertical: 15
//         },
//         buttonText: {
//             color: 'black',
//             textAlign: 'center',
//             fontWeight: '700'
//         }
//     })

// }