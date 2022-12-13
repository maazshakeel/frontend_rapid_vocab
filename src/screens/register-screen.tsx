import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/RegisterScreen.styles";

export default function RegisterScreen({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/login_register_screen.png")}
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.headerText}>Learn Rapidly</Text>
      <SafeAreaView style={styles.inputContainer}>
        <TextInput placeholder="Email ID" style={styles.emailInput} />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.emailInput}
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          style={styles.emailInput}
        />
        <TouchableOpacity
          onPress={() => navigation.push("ForgotPassword")}
          style={styles.forgotText}
        ></TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.textLoginButton}>Register</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomTextGrey}>By signing up, you're agree to our</Text>
            <Text style={styles.bottomTextBlue}>Terms & Conditions </Text>
          <Text style={styles.bottomTextGrey}>and</Text>
            <Text style={styles.bottomTextBlue}>Policy</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
