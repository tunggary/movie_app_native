import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";
import { trimText } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;
const Bg = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;
const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  justify-content: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
`;
const VotesContainer = styled.Text`
  margin-bottom: 7px;
`;
const Overview = styled.Text`
  color: rgb(230, 230, 230);
  font-size: 14px;
  font-weight: 500;
`;
const Button = styled.View`
  background-color: #e74c3c;
  padding: 5px 10px;
  width: 100px;
  margin-top: 7px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: white;
`;
const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    navigation.navigate("Detail", { id, title, backgroundImage, votes, overview, poster });
  };
  return (
    <Container>
      <Bg source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 40)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 110)}</Overview>
          <TouchableOpacity onPress={gotoDetail}>
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
