import React from 'react';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function Empty() {
  //this block of code works for iOS simulator only
  const fetchFonts = async () =>
    await Font.loadAsync({
      Inspiration: require('../assets/fonts/Inspiration-Regular.ttf'),
    });
  //this block of code works for web browser only
  // const [fontsLoaded] = useFonts({
  //   Inspiration: require('../assets/fonts/Inspiration-Regular.ttf'),
  // });

  // SplashScreen.preventAutoHideAsync();

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <ComponentContainer>
      <EmptyText>Hey, Go-Getter!</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 540px;
`;

const EmptyText = styled.Text`
  color: lightseagreen;
  font-family: 'Zapfino';
  font-size: 40px;
  /*font-family: 'Inspiration';
  font-size: 65px;*/
`;
