import React, { useEffect, useState } from "react";
import { questions, words } from "../static/data";
import colors from "../theme";
import {
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Modal,
  Text,
  Animated,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { width } from "../utils/dimension.utils";
import * as Speech from "expo-speech";
import { useFocusEffect } from "@react-navigation/native";

export default function QuizScreen({ route, navigation }) {
  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        ToastAndroid.showWithGravityAndOffset(
          "Changes may not be saved!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      };
    }, [navigation])
  );
  //let allQuestions = questions;

  /* state - BEGIN */
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);
  const [allQuestions, setAllQuestions] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuesitonIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState<null | string>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  /* state - END */

  /* useeffect - BEGIN */
  const fetchData = async () => {
    setLoading(true);
    console.log(words(parseInt(route.params.numberOfQuestions)));
    const d = await words(parseInt(route.params.numberOfQuestions));
    console.log(d);
    setAllQuestions(d);
    console.log(allQuestions);
    setLoading(false);
  };
  /* useeffect - END */
  // progress
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });

  /* Validate Answer - BEGIN */
  const validateAnswer = async (selectedOption: any) => {
    let correct_option = allQuestions[currentQuestionIndex].correctOption;
    Speech.speak(allQuestions[currentQuestionIndex].meaning, {
      language: "in",
    });
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  /* Validate Answer - END */

  /* Handle Next - BEGIN */
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuesitonIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  /* Handle Next - END */

  /* Restart Quiz - BEGIN */
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuesitonIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    navigation.goBack();
  };
  /* Restart Quiz - END */

  /* Render Question - BEGIN */
  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex].word}
        </Text>
      </View>
    );
  };
  /* Render Question - END */

  /* Render Option - BEGIN */
  const renderOptions = () => {
    let id = 0;
    return (
      <View>
        {allQuestions[currentQuestionIndex].options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={id++}
            style={{
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? colors.success
                  : option == currentOptionSelected
                  ? colors.error
                  : colors.secondary + "40",
              backgroundColor:
                option == correctOption
                  ? colors.success + "20"
                  : option == currentOptionSelected
                  ? colors.error + "20"
                  : colors.secondary + "20",
              height: 60,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: colors.white }}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: colors.success,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: colors.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: colors.error,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: colors.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  /* Render Option - END */

  /* Render Next Button - BEGIN */
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: colors.accent,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 20, color: colors.white, textAlign: "center" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };
  /* Render Next Button - END */

  /* Render Progress Bar - BEGIN */
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: colors.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };
  /* Render Progress Bar - END */

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: colors.background,
          position: "relative",
        }}
      >
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2 ? "Congratulations!" : "Oops!"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color:
                      score > allQuestions.length / 2
                        ? colors.success
                        : colors.error,
                  }}
                >
                  {score}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.black,
                  }}
                >
                  / {allQuestions.length}
                </Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: colors.accent,
                  padding: 20,
                  width: "100%",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: colors.white,
                    fontSize: 20,
                  }}
                >
                  Retry Quiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Background Image */}
        <Image
          source={require("../../assets/images/DottedBG.png")}
          style={{
            width: width,
            height: 130,
            zIndex: -1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={"contain"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
