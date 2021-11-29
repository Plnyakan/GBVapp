import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../login/Auth";
import Login from "../login/Login";
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core'
import { createStackNavigator } from '@react-navigation/stack';


//const navigation = createStackNavigator()
export default () => {

const navigation = useNavigation()

const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
     // navigation.navigate("Login")
      console.log("logging out")
    })
    .catch(error => alert(error.message))
}

return (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Pleasure Nyakane">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}></Text>
      </View>

      <Text style={{ color: "black", fontSize: 14, textAlign: 'center', fontWeight: 'bold'}}>Email: {auth.currentUser?.email}</Text>
     
      <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={handleSignOut}
      />
    </Card>
  </View>
);
}