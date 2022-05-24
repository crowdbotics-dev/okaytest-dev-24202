import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    left: 50,
    top: 174,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }}>
      <Text style={{
      left: 39,
      top: 50,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Loremtesting m… </Text><TextInput></TextInput><TextInput style={{
      left: 9,
      top: 173,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }} editable={false} placeholder="Tesing " defaultValue="Testing world tttt"></TextInput></View>;
};

export default Untitled2;