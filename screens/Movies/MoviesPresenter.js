import React from "react";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";

const { height: HEIGHT } = Dimensions.get("window");
const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;
const Container = styled.View``;

export default function MoviesPresenter({ refreshFn, loading, nowPlaying, popular, upcoming }) {
  return (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>
      <>
        <SliderContainer>
          <Swiper loop timeout={2} controlsEnabled={false}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <HorizontalSlider title="Popular Movies">
            {popular.map((movie) => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </HorizontalSlider>
          <List title="Coming soon">
            {upcoming.map((movie) => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.title}
                release={movie.release_date}
                poster={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </List>
        </Container>
      </>
    </ScrollContainer>
  );
}
