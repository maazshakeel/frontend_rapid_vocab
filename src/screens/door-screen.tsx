import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Door({ navigation }: { navigation: any }) {
  const onMount = async () => {
    if (await AsyncStorage.getItem("key")) {
    }
  };

  useEffect(() => {}, []);
}
