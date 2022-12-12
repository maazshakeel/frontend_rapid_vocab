import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../styles/LoginScreen.styles";

export default function LoginScreen({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/login_register_screen.png")}
          style={styles.headerImage}
        />
      </View>
    </View>
  );
}
