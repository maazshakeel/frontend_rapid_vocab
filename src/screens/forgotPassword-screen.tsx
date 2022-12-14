import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "../styles/ForgotPasswordScreen.styles";

export default function ForgotPasswordScreen({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/forgot_password_screen.png")}
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.headerText}>Forgot Password?</Text>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView>
            <Text style={styles.topTextGrey}>
              Don’t worry! It happens. Please enter the address associated with
              your account.
            </Text>
            <TextInput placeholder="Email ID" style={styles.emailInput} />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.textLoginButton}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
