import React from 'react';
import styled from 'styled-components/native';

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={
          'https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Grace-Hopper/GH-Full-Lockup-Chalk.png'
        }
      />
      <EmptyText>Add To-Do.</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 200px;
`;

const EmptyText = styled.Text`
  color: palevioletred;
  font-family: poppins-bold;
  margin-top: 30px;
  font-size: 30px;
`;
