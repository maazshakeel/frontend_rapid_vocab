import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { styles } from "../styles/RegisterScreen.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../static/api";
import { StackActions } from "@react-navigation/native";

export default function RegisterScreen({ navigation }): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = async () => {
    if (email === "" || password === "" || confirmPassword === "") {
      ToastAndroid.showWithGravityAndOffset(
        "Enter data for registration, please!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      ToastAndroid.showWithGravityAndOffset(
        "Invalid Email!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }
    if (password !== confirmPassword) {
      ToastAndroid.showWithGravityAndOffset(
        "Password doesn't match!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return;
    }

    const res = await client.post("/api/register", {
      email,
      password,
      verified: false,
    });

    console.log(res.data);

    if (res.data.status === "success") {
      ToastAndroid.showWithGravityAndOffset(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      navigation.navigate("Login");
      return;
    } else {
      ToastAndroid.showWithGravityAndOffset(
        res.data.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  };
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
        <TextInput
          placeholder="Email ID"
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.emailInput}
        />
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Password"
          style={styles.emailInput}
        />
        <TextInput
          secureTextEntry
          value={confirmPassword}
          onChangeText={(e) => setConfirmPassword(e)}
          placeholder="Confirm Password"
          style={styles.emailInput}
        />
        <TouchableOpacity
          onPress={() => navigation.push("ForgotPassword")}
          style={styles.forgotText}
        ></TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={submitForm}>
          <Text style={styles.textLoginButton}>Register</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomTextGrey}>
            By signing up, you're agree to our
          </Text>
          <Text style={styles.bottomTextBlue}>Terms & Conditions </Text>
          <Text style={styles.bottomTextGrey}>and</Text>
          <Text style={styles.bottomTextBlue}>Policy</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
