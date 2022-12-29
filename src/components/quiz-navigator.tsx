import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import AskQuestion from "../screens/askQuestionQuiz-screen";

const Stack = createNativeStackNavigator();

function QuizNavigator() {
  return (
    <Stack.Navigator initialRouteName="AskHowManyQuestion">
      <Stack.Screen name="AskHowManyQuestion" component={AskQuestion} />
    </Stack.Navigator>
  );
}

export { QuizNavigator };
