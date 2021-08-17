import React from "react";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import Link from "../../components/Detail/Link";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { formatDate } from "../../utils";
import ScrollContainer from "../ScrollContainer";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  height: ${Dimensions.get("window").height / 3}px;
`;

const Contianer = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  padding: 0px 35px;
  margin-top: 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ openBrowser, result, loading }) => {
  return (
    <ScrollContainer loading={false} contentContainerStyle={{ paddingBottom: 50 }}>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, " ") }} />
        <Contianer>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title != "" && result.title}</Title>
            {result.votes == null || result.votes != "undefined" ? null : (
              <Votes votes={result.votes} />
            )}
          </Info>
        </Contianer>
      </Header>
      <Data>
        {result.overview != "" && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        )}
        {loading && <ActivityIndicator color={"white"} style={{ marginTop: 40 }} />}
        {result.spoken_languages && (
          <>
            <DataName>Languages</DataName>
            <DataValue>{result.spoken_languages.map((l) => `${l.name} `)}</DataValue>
          </>
        )}
        {result.genres && (
          <>
            <DataName>Genres</DataName>
            <DataValue>{result.genres.map((g) => `${g.name} `)}</DataValue>
          </>
        )}
        {result.release_date && (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatDate(result.release_date)}</DataValue>
          </>
        )}
        {result.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        )}
        {result.runtime && result.runtime != "0" ? (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
          </>
        ) : null}
        {result.number_of_episode && (
          <>
            <DataName>Seasons / Episode</DataName>
            <DataValue>
              {result.number_of_seasons} / {result.number_of_episode}
            </DataValue>
          </>
        )}
        {result.first_air_date && (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{formatDate(result.first_air_date)}</DataValue>
          </>
        )}
        {result.imdb_id && (
          <>
            <DataName>Links</DataName>
            <Link
              text={"IMDB Page"}
              icon={"imdb"}
              onPress={() => openBrowser(`http://www.imdb.com/title/${result.imdb_id}`)}
            />
          </>
        )}
        {result.videos.results?.length > 0 && (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon="youtube-play"
                onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
              />
            ))}
          </>
        )}
      </Data>
    </ScrollContainer>
  );
};
