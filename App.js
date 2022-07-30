import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import { decode, encode } from 'base-64';
import { auth } from './src/firebase/config';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('USER', user);
        setLoading(false);
        setUser(user);
      } else {
        setLoading(false);
        console.log('maybe user is signed out or there is no user');
      }
    });
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // <Stack.Screen name="Home">
          //   {(props) => <HomeScreen {...props} extraData={user} />}
          // </Stack.Screen>
          // <Stack.Screen
          //   name="HomeScreen"
          //   component={HomeScreen}
          //   options={(props) => <HomeScreen {...props} extraData={user} />}
          // />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
