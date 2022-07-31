import React from 'react';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  let [fontsLoaded] = useFonts({
    Assistant: require('../assets/fonts/Assistant-Light.ttf'),
  });

  SplashScreen.preventAutoHideAsync();

  return (
    <ComponentContainer>
      <HeaderText>To-Do</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  display: flex;
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
`;

const HeaderText = styled.Text`
  color: palevioletred;
  font-family: 'Assistant';
  font-size: 30px;
`;

const HeaderList = styled.Text`
  color: palevioletred !important;
  font-family: 'Assistant';
  font-size: 20px;
  /*margin-right: 20px;*/
`;
