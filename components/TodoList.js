import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export default function TodoList({ item, deleteItem }) {
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Entypo name="circle" size={20} color="slateblue" />
        </CirlceContainer>
        <View>
          <TextItem>{item.value}</TextItem>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="slateblue" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: auto;
  align-content: center;
  align-items: center;
`;

const TextItem = styled.Text`
  color: darkslateblue;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 6px;
  font-family: Verdana;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 40px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
