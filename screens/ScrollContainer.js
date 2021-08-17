import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import { useState } from "react/cjs/react.development";

const ScrollContainer = ({ loading, children, contentContainerStyle, refreshFn }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          enabled={false}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flexGrow: 1,
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;
