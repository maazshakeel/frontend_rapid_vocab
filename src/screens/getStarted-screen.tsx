import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/FirstScreen.styles";

export default function FirstScreen({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.headerText}>Learn Rapidly</Text>
        <Image
          source={require("../../assets/images/very_first_screen.png")}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => navigation.push("Login")}
          style={styles.loginButton}
        >
          <Text style={styles.textLoginButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
