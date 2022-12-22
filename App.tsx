import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthNavigator } from "./src/auth";
import { HomeNavigator } from "./src";
import AppContainer from "./src/components/app-container";

const isLogin = async () => (await AsyncStorage.getItem("key")) === null;

export default function App() {
  // @ts-ignore
  if (isLogin()._A === null) {
    return (
      <AppContainer>
        <AuthNavigator />
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <HomeNavigator />
    </AppContainer>
  );
}
