import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../api";

const ImageCom = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 3px;
`;
const Poster = ({ url }) => <ImageCom source={{ uri: apiImage(url) }} />;

Poster.propTypes = {
  url: PropTypes.string,
};

export default Poster;
