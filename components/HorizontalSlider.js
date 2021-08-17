import React from "react";
import { ScrollView, View } from "react-native";
import Title from "./Title";
import PropTypes from "prop-types";

const HorizontalSlider = ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginBottom: 40 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
    >
      {children}
    </ScrollView>
  </View>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default HorizontalSlider;
