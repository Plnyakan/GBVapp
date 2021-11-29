import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Education from '../education/Education';
import Report from '../report/Report'
import Chatbot from '../chatbot/Chatbot'
import Login from '../login/Login';
import Register from '../login/Register';
import Profile from '../profile/Profile';
import "firebase/auth";
import firebase from 'firebase/app';
import Loading from '../login/Loading';

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Report"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Education"
        component={Education}
        options={{
          tabBarLabel: 'Education',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="school" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chatbot"
        component={Chatbot}
        options={{
          tabBarLabel: 'chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
    <AuthStack.Screen options={{ headerShown: false }} name="Register" component={Register} />
  </AuthStack.Navigator>
);


export default () => {
let [user, setUser] = useState(false);
const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(() => {
  setTimeout(() => {
    setIsLoading(!isLoading);
    setUser(true);
  }, 500);
}, []);


  firebase.auth().onAuthStateChanged((user) => {
    if(user != null){
      setUser(true);
    }else{
      setUser(false);
    }
  });
    return (
      <NavigationContainer>
        {isLoading ? (
        <Loading/> 
        ): user ? (
          <MyTabs />
        ) : (
          <AuthStackScreen />
        )}
      </NavigationContainer>
    );
  };


// export default function MYAppAuth() {
//   //const [isLoading, setIsLoading] = React.useState(true);
//   let [authState, setAuthState] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let cachedAuth = await getCachedAuthAsync();
//       if (cachedAuth && !authState) {
//         setAuthState(cachedAuth);
//       }
//     })();
//   }, []);

//   return(
//       <NavigationContainer>
//         {authState ? (
//           <MyTabs />
//         ) : (
//           <AuthStackScreen />
//         )}
//       </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// let config = {
//   issuer: 'https://accounts.google.com',
//   scopes: ['openid', 'profile'],
//   /* This is the CLIENT_ID generated from a Firebase project */
//   clientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
// };

// let StorageKey = '@MyApp:CustomGoogleOAuthKey';

// export async function signInAsync() {
//   let authState = await AppAuth.authAsync(config);
//   await cacheAuthAsync(authState);
//   console.log('signInAsync', authState);
//   return authState;
// }

// async function cacheAuthAsync(authState) {
//   return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
// }

// export async function getCachedAuthAsync() {
//   let value = await AsyncStorage.getItem(StorageKey);
//   let authState = JSON.parse(value);
//   console.log('getCachedAuthAsync', authState);
//   if (authState) {
//     if (checkIfTokenExpired(authState)) {
//       return refreshAuthAsync(authState);
//     } else {
//       return authState;
//     }
//   }
//   return null;
// }

// function checkIfTokenExpired({ accessTokenExpirationDate }) {
//   return new Date(accessTokenExpirationDate) < new Date();
// }

// async function refreshAuthAsync({ refreshToken }) {
//   let authState = await AppAuth.refreshAsync(config, refreshToken);
//   console.log('refreshAuth', authState);
//   await cacheAuthAsync(authState);
//   return authState;
// }

// export async function signOutAsync({ accessToken }) {
//   try {
//     await AppAuth.revokeAsync(config, {
//       token: accessToken,
//       isClientIdProvided: true,
//     });
//     await AsyncStorage.removeItem(StorageKey);
//     return null;
//   } catch (e) {
//     alert(`Failed to revoke token: ${e.message}`);
//   }
// }
