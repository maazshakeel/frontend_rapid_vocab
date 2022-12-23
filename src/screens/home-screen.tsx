import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../styles/HomeScreen.styles";
import {
  Box,
  FormControl,
  WarningOutlineIcon,
  Stack,
  Input,
} from "native-base";

export default function HomeScreen({ navigation }) {
  const logToken = async () => console.log(await AsyncStorage.getItem("key"));

  useEffect(() => {
    logToken();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                defaultValue="12345"
                placeholder="password"
              />
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </View>
  );
}
