import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextCom = styled.Text`
  color: white;
  font-weight: 600;
  margin-left: 10px;
`;

const Link = ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <FontAwesome name={icon} color="white" size={25} />
      <TextCom>{text}</TextCom>
    </Container>
  </TouchableOpacity>
);

export default Link;
