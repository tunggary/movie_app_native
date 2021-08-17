import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";

export default ({
  navigation,
  route: {
    params: { isTv = false, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [result, setResult] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      votes,
      overview,
      videos: {
        results: [],
      },
    },
  });
  const getData = async () => {
    const [getResult, getResultError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);
    setResult({
      loading: false,
      result: {
        ...getResult,
        title: getResult.title || getResult.name,
        backgroundImage: getResult.backdrop_path,
        poster: getResult.poster_path,
        overview: getResult.overview,
        votes: getResult.vote_average,
      },
    });
  };
  useEffect(() => {
    getData();
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };
  return <DetailPresenter openBrowser={openBrowser} {...result} />;
};
