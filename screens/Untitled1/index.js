import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#abdfdc",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: "50%"
  }}>
      <View style={{
      left: 0,
      top: 0,
      position: "absolute",
      width: 197,
      height: 80,
      backgroundColor: "#cc2626",
      borderRadius: 74,
      borderColor: "#15e421",
      borderWidth: 8
    }}></View><Text style={{
      left: 39,
      top: 147,
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
    }}>CrowdboticsTesting</Text><TextInput style={{
      left: 13,
      top: 248,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput></View>;
};

export default Untitled1;