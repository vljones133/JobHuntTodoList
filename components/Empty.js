import React from 'react';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
// import { useFonts, Inspiration_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

export default function Empty() {
  let [fontsLoaded] = useFonts({
    Inspiration: require('../assets/fonts/Inspiration-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync();

  return (
    <ComponentContainer>
      <EmptyText>Hey, Go Getter!</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  /* height: 650px; */
`;

const EmptyText = styled.Text`
  color: palevioletred;
  font-family: 'Inspiration';
  margin-top: 30px;
  font-size: 65px;
`;
