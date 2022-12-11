import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";

const StackAuth = createNativeStackNavigator();

function Navigator() {
  return (
    <StackAuth.Navigator initialRouteName="Login">
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
    </StackAuth.Navigator>
  );
}

export { Navigator };
