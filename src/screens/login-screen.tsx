import React, { useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../styles/LoginScreen.styles";
import UserContext from "../components/User/User";
import { StackActions } from "@react-navigation/native";
import { Input } from "native-base";
import { width } from "../utils/dimension.utils";
import colors from "../theme";

export default function LoginScreen({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  const onSubmit = async () => {
    await AsyncStorage.setItem("key", "secretkey");
    user.loggedIn = true;
    navigation.dispatch(
      StackActions.replace("HomeScreen", {
        token: "secretkey",
      })
    );
    return;
  };

  const user: any = useContext(UserContext);

  const onRefresh = async () => {
    if (await AsyncStorage.getItem("key")) {
      console.log("Logged in");
    }
    return;
  };

  const logToken = async () => console.log(await AsyncStorage.getItem("key"));

  useEffect(() => {
    logToken();
    onRefresh();
    console.log("Reloading...");
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/login_register_screen.png")}
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.headerText}>Learn Rapidly</Text>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView behavior="height">
          <TextInput placeholder="Email ID" style={styles.emailInput} />
          {/*<TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.emailInput}
        />*/}
          <Input
            secureTextEntry
            placeholder="Password"
            width={width - 27}
            borderRadius="24"
            borderColor={colors.GREY}
            mt="1"
            bottom="0"
            height="65"
            backgroundColor={colors.GREY}
            style={styles.passInput}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={() => navigation.push("ForgotPassword")}
          style={styles.forgotText}
        >
          <Text style={styles.bottomTextBlue}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.textLoginButton}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomTextGrey}>New to Rapid learning?</Text>
          <TouchableOpacity onPress={() => navigation.push("Register")}>
            <Text style={styles.bottomTextBlue}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
