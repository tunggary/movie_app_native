import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slide from "../../components/Tv/Slide";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../ScrollContainer";

const { height: HEIGHT } = Dimensions.get("window");
const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, popular, topRated, today, thisweek, refreshFn }) => (
  <ScrollContainer loading={loading} refreshFn={refreshFn}>
    <Container>
      <SliderContainer>
        <Swiper loop timeout={2} controlsEnabled={false}>
          {thisweek.map((show) => (
            <Slide
              isTv={true}
              key={show.id}
              id={show.id}
              title={show.name}
              overview={show.overview}
              votes={show.vote_average}
              backgroundImage={show.backdrop_path}
              poster={show.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <HorizontalSlider title="Popular Shows">
        {popular.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            isTv={true}
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
