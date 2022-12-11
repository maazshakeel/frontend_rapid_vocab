import React from "react";
import { Text, View, Button } from "react-native";

export default function LoginScreen({ navigation }): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login Screen!</Text>
      <Button
        title="Go to register screen!"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
