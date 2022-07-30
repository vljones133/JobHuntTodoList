import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// export default function HomeScreen(props) {
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}
