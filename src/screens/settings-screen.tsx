import { Button, HStack, Switch } from "native-base";
import { View, Text } from "react-native";
import colors from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { useState } from "react";

export default function SettingScreen({ navigation }) {
  const [checked, setChecked] = useState(false);
  const onLogOut = async () => {
    await AsyncStorage.removeItem("key");
    navigation.dispatch(StackActions.replace("Login"));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.BG,
      }}
    >
      <Text
        style={{
          fontSize: 42,
          color: "#fff",
          fontWeight: "bold",
          paddingTop: 45,
          textAlign: "center",
        }}
      >
        Settings
      </Text>
      <HStack alignItems="center" mt="10" marginRight="auto" marginLeft="auto">
        <Text
          // @ts-ignore
          style={{
            fontSize: 25,
            color: "#ffffff",
            fontWeight: "light",
          }}
        >
          Pronounciation:{" "}
        </Text>
        <Switch isChecked={checked} onToggle={() => setChecked(!checked)} />
      </HStack>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          paddingBottom: 10,
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
        }}
      >
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
          onPress={onLogOut}
        >
          Log Out
        </Button>
      </View>
    </View>
  );
}
