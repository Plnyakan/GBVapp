import React from "react";
import { Button,
   StyleSheet, 
   Text, 
   View,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard, 
   TextInput
   } from 'react-native';
import { useState, useEffect } from 'react';
import { auth } from "../firebase";

export default function Login({navigation}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Report")
      }
    })

      }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>SIGN-UP</Text>

              <TextInput placeholder="Email"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
                 />

              <TextInput placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
                autoCapitalize="none"
                 />

              <Button buttonStyle={styles.loginButton}
                onPress={handleSignUp}
                title="Register" />

              <Button containerStyle={styles.GoogleLoginButton}
               // type='clear' onPress={() => onGoogleLoginPress()}
                onPress={() => {navigation.navigate('Login')}}
                title="Login" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }


const styles = StyleSheet.create({
 containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#3897f1',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
GoogleLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',

},
});
