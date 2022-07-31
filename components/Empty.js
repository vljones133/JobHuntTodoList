import React from 'react';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function Empty() {
  const fetchFonts = async () =>
    await Font.loadAsync({
      Inspiration: require('../assets/fonts/Inspiration-Regular.ttf'),
    });
  // let [fontsLoaded] = useFonts({
  //   Inspiration: require('../assets/fonts/Inspiration-Regular.ttf'),
  // });

  // SplashScreen.preventAutoHideAsync();

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <ComponentContainer>
      <EmptyText>Hey, Go Getter!</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyText = styled.Text`
  color: palevioletred;
  font-family: 'Inspiration', Zapfino, cursive;
  font-size: 65px;
`;
