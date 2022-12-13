import React from "react";
import { Text, View, Button } from "react-native";

export default function RegisterScreen({ navigation }): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Register Screen!</Text>
      <Button title="Go back!" onPress={() => navigation.goBack()} />
    </View>
  );
}
