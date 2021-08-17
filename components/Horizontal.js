import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding: 0 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 30px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const ReleaseDate = styled.Text`
  color: white;
`;

const Horizontal = ({ id, title, release, poster, overview, isTv = false }) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    navigation.navigate("Detail", { id, title, release, poster, overview, isTv });
  };
  return (
    <TouchableOpacity onPress={gotoDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {release ? <ReleaseDate>{formatDate(release)}</ReleaseDate> : null}
          <Overview>{trimText(overview, 170)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Horizontal;
