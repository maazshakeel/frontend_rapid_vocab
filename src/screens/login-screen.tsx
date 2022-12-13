import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
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
      <Text style={styles.headerText}>Learn Rapidly</Text>
      <SafeAreaView style={styles.inputContainer}>
        <TextInput placeholder="Email ID" style={styles.emailInput} />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.emailInput}
        />
        <TouchableOpacity
          onPress={() => navigation.push("ForgotPassword")}
          style={styles.forgotText}
        >
          <Text style={styles.bottomTextBlue}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.textLoginButton}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomTextGrey}>New to Rapid learning?</Text>
          <TouchableOpacity onPress={() => navigation.push("Register")}>
            <Text style={styles.bottomTextBlue}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
