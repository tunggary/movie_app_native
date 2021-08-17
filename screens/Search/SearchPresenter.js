import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Search/input";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../ScrollContainer";

export default ({ movies, shows, onChange, onSubmit, keyword }) => (
  <ScrollContainer loading={false} refreshFn={onSubmit}>
    <Input
      placeholder={"Write a keyword"}
      onChange={onChange}
      onSubmit={onSubmit}
      value={keyword}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title="Movie Results">
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            votes={movie.vote_average}
            title={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title="TV Results">
        {shows.map((show) => (
          <Vertical
            isTv={true}
            key={show.id}
            id={show.id}
            votes={show.vote_average}
            title={show.name}
            poster={show.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
