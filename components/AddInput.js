import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState('');

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add Task..."
          onChangeText={onChangeText}
          value={value}
        />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
          setValue('');
        }}
      >
        <Text style={[styles.purple, styles.size18]}>Submit</Text>
      </SubmitButton>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 230px;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid darkslateblue;
  /*font-family: 'Assistant';
  font-size: 20px;*/
`;

const SubmitButton = styled.TouchableOpacity`
  color: slateblue;
  margin: 10px;
  padding: 10px 20px;
  border: 2px solid slateblue;
  border-radius: 5px;
`;

const styles = StyleSheet.create({
  purple: {
    color: 'slateblue',
  },
  size18: {
    fontSize: 18,
  },
});
