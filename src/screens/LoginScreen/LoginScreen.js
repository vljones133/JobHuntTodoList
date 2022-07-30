import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = async () => {
    try {
      // if (validate()) {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('AFTER SIGN IN');
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log('USER', user);
          navigation.navigate('Home', { user });
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
        } else {
          console.log('maybe user is signed out or there is no user');
        }
      });
    } catch (error) {
      console.log(error);
      let alertTitle = '';
      let alertMessage = '';

      if (error.code === 'auth/too-many-requests') {
        alertTitle = 'Too many login attempts';
        alertMessage = 'Please try again later.';
      } else if (error.code === 'auth/wrong-password') {
        alertTitle = 'Incorrect username/password';
        alertMessage = 'Please try again.';
      } else {
        alertTitle = 'Login failed';
        alertMessage = 'Please try again later.';
      }

      Alert.alert(alertTitle, alertMessage);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always"
      >
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
