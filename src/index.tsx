import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "./screens/home-screen";
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";
import ForgotPasswordScreen from "./screens/forgotPassword-screen";
import FirstScreen from "./screens/getStarted-screen";
import TesterNav from "./components/drawer-navigator";

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Login">
      <HomeStack.Screen
        name="HomeScreen"
        component={TesterNav}
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
