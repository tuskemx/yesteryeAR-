

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        renderMap: false,
        correctInput: true,
        hidden: true
    };

    handleSubmit = () => {
        this.props.changeStateBool(false);
        if (
            this.state.username === 'J' &&
            this.state.password === 'J' &&
            this.state.email === 'J'
        ) {
            this.props._getExperienceButtonOnPress();
        } else {
            this.setState({ correctInput: false });
        }
    };

    render() {
        return (
            <ImageBackground
                source={require('./background.png')}
                style={styles.background}
            >
                <View style={styles.image}>
                    <Image source={require("./yylogo3.png")} style={styles.logo} />
                </View>
                {/* <View style={styles.image}>
          <Image source={require('./Beware.png')} style={styles.safe} />
          <Image source={require('./yester.png')} style={styles.logo} />
        </View> */}
                <View style={styles.container}>
                    <View style={styles.containerform}>
                        <Text style={styles.formtext}>Username</Text>
                        <TextInput
                            placeholder="Username ..."
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
                        <Text style={styles.formtext}>Email</Text>
                        <TextInput
                            placeholder="Email ..."
                            secureTextEntry={this.state.hidden}
                            placeholderTextColor="white"
                            onChangeText={email =>
                                this.setState({ email, correctInput: true })
                            }
                            style={styles.form}
                            value={this.state.email}
                        />
                        {!this.state.correctInput && (
                            <Text style={styles.error}>
                                Incorrect password or username, or email
              </Text>
                        )}
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <TouchableOpacity
                            title="Already have an account? Login!"
                            onPress={this.handleSubmit}
                            color="#25a7e3"
                            style={styles.buttonstyle}
                        >
                            <Text style={styles.text}>Already Have An Account?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity title="Sign Up!" style={styles.buttonstyle}>
                            <Text style={styles.text}>Sign-up </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 0,
        padding: 20
        // alignItems: 'stretch'
    },
    formtext: {
        fontSize: 18,
        color: 'black',
        fontWeight: '900',
        marginBottom: 10
    },
    containerform: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    error: {
        color: 'black'
    },
    text: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#ffffff'
    },
    buttonstyle: {
        marginTop: 10,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1
    },
    form: {
        fontSize: 12,
        backgroundColor: 'black',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        color: 'white'
    },
    background: {
        width: '100%',
        height: '100%',
        opacity: 0.9
    },
    logo: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        width: 380,
        height: 140
    },
    safe: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        width: 210,
        height: 90
    },
    logo: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: '5%'
    }
});
