import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeNavigator } from "./src";
import AppContainer from "./src/components/app-container";
import UserContext from "./src/components/User/User";
import { useEffect } from "react";

const globalState = {
  loggedIn: false,
};

export default function App() {
  const f = async () => await AsyncStorage.removeItem("key");
  useEffect(() => {
    console.log("hello");
    f();
  });

  return (
    <UserContext.Provider value={globalState}>
      <AppContainer>
        <HomeNavigator />
      </AppContainer>
    </UserContext.Provider>
  );
}
