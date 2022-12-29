import { Input, Button } from "native-base";
import { View, Text, SafeAreaView, Image } from "react-native";
import colors from "../theme";
import { height, width } from "../utils/dimension.utils";

export default function AskQuestion({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.BG,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: width - 27,
          height: 250,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}
      >
        <SafeAreaView style={{ position: "absolute", top: 40 }}>
          <Input
            placeholder="How many questions?"
            width={width - 100}
            borderRadius="18"
            borderColor={colors.GREY}
            mt="1"
            bottom="0"
            height="65"
            backgroundColor={colors.GREY}
            style={{
              fontSize: 15,
              paddingLeft: 20,
            }}
          />
        </SafeAreaView>
        <View style={{ position: "absolute", bottom: 40 }}>
          <Button
            style={{
              backgroundColor: colors.PRIMARY,
              alignSelf: "center",
              borderRadius: 18,
            }}
            maxW="400"
            height="60"
            width={width - 100}
            mt="10"
            _text={{
              fontSize: 18,
            }}
            onPress={() => navigation.navigate("QuizScreen")}
          >
            Start learning
          </Button>
        </View>
      </View>
    </View>
  );
}
