import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// screens
import HomeScreen from "./screens/home-screen";
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";
import ForgotPasswordScreen from "./screens/forgotPassword-screen";
import FirstScreen from "./screens/getStarted-screen";
import TesterNav from "./components/drawer-navigator";
import QuizScreen from "./screens/quiz-screen";
import TestScreen from "./screens/test-screen";
import SettingScreen from "./screens/settings-screen";
import colors from "../src/theme";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarActiveBackgroundColor: "#875FC0",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={TesterNav} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Login">
      <HomeStack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Testing"
        component={TestScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

export { HomeNavigator };
