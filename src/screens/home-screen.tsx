import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../styles/HomeScreen.styles";

export default function HomeScreen({ navigation }) {
  const logToken = async () => console.log(await AsyncStorage.getItem("key"));

  useEffect(() => {
    logToken();
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
