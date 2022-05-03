import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 56,
      top: 24,
      position: "absolute",
      width: 80,
      height: 80,
      backgroundColor: "#cc2626",
      borderRadius: 74,
      borderColor: "#15e421",
      borderWidth: 8
    }}></View><Text style={{
      left: 41,
      top: 209,
      position: "absolute",
      width: 100,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#29ea16",
      opacity: 1,
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      textAlign: "center"
    }}>CrowdboticsTesting</Text></View>;
};

export default Untitled1;