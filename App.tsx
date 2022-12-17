import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./src/auth";
import { HomeNavigator } from "./src";

const isLogin = async () => (await AsyncStorage.getItem("key")) === null;

export default function App() {
  if (isLogin()._A === null) {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
