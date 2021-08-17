import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0 5px 0;
`;
const Vertical = ({ id, poster, title, votes, isTv = false }) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    navigation.navigate("Detail", { id, title, poster, votes, isTv });
  };
  return (
    <TouchableOpacity onPress={gotoDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 15)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
