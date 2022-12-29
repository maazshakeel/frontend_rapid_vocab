// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import ForgotPasswordScreen from "../screens/forgotPassword-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home-screen";
import colors from "../theme";
import { width } from "../utils/dimension.utils";
import AskQuestion from "../screens/askQuestionQuiz-screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FirstScreen" component={HomeScreen} />
      <Stack.Screen name="HowManyQuestions" component={AskQuestion} />
    </Stack.Navigator>
  );
};

function TesterNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff", //Set Drawer background
          width: width / 2 + 75, //Set Drawer width
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
        headerTransparent: true,
        headerTitle: "",
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
