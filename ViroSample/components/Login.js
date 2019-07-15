import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { Input } from 'react-native-elements'
import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({

    username: t.String,
    password: t.String
})



export default class Login extends Component {
    handleSubmit = () => {
        const value = this.input.getValue();
        console.log("value: ", value);
    };
    render() {
        return (
            <View style={styles.container}>
                <Form type={User} ref={type => (this.input = type)} />
                <Button title="Sign Up!" onPress={this.handleSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 50,
        padding: 20,
        backgroundColor: "#ffffff"
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