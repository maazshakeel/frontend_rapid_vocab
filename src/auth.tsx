import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";
import ForgotPasswordScreen from "./screens/forgotPassword-screen";
import FirstScreen from "./screens/getStarted-screen";

const StackAuth = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <StackAuth.Navigator initialRouteName="FirstScreen">
      <StackAuth.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <StackAuth.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <StackAuth.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <StackAuth.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
    </StackAuth.Navigator>
  );
}

export { AuthNavigator };
