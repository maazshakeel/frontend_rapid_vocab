import React, { useEffect } from "react";
import { Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../styles/HomeScreen.styles";
import { Box, Button, Text } from "native-base";
import { StackActions } from "@react-navigation/native";
import colors from "../theme";

export default function HomeScreen({ navigation }) {
  const logToken = async () => console.log(await AsyncStorage.getItem("key"));
  const onLogOut = async () => {
    await AsyncStorage.removeItem("key");
    navigation.dispatch(
      StackActions.replace("Login", {
        token: "secretkey",
      })
    );
  };

  useEffect(() => {
    logToken();
  }, []);
  return (
    <View style={{ backgroundColor: colors.BG, flex: 1 }}>
      <Box alignItems="center" mt="85">
        <Text fontSize="2xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text fontSize="md" color="white" fontWeight="light">
          Learn language in a more rapid way!
        </Text>
        <Image
          source={require("../../assets/images/learning_home_screen.png")}
          style={{
            width: 350,
            height: 320,
            marginTop: 50,
            alignSelf: "center",
            resizeMode: "stretch",
          }}
        />
        <Button
          style={{
            backgroundColor: colors.PRIMARY,
            alignSelf: "center",
            borderRadius: 30,
          }}
          maxW="400"
          height="70"
          width="320"
          mt="10"
          _text={{
            fontSize: 18,
          }}
          onPress={() => navigation.openDrawer()}
        >
          Start learning
        </Button>
      </Box>
    </View>
  );
}
