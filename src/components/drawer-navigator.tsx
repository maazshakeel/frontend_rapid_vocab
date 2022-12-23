// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import ForgotPasswordScreen from "../screens/forgotPassword-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home-screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FirstScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

function TesterNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#c6cbef", //Set Drawer background
          width: 250, //Set Drawer width
        },
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Drawer.Screen
        name="FirstPage"
        options={{
          drawerLabel: "First page Option",
          title: "First Stack",
        }}
        component={FirstScreenStack}
      />
    </Drawer.Navigator>
  );
}

export default TesterNav;