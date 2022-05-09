import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled3 = () => {
  return <View style={{
    backgroundColor: "#6b3760",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <View style={{
      left: 0,
      top: 0,
      position: "absolute",
      width: 197,
      height: 78,
      backgroundColor: "#e42020",
      borderRadius: "50%",
      borderColor: "#2da5a7",
      borderWidth: 0
    }}></View><TextInput style={{
      left: 31,
      top: 191,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} placeholder="Test123" defaultValue="testing23"></TextInput></View>;
};

export default Untitled3;