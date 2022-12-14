import { StyleSheet } from "react-native";
import colors from "../theme";

import { width, height } from "../utils/dimension.utils";

console.log(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 45,
  },
  headerImage: {
    resizeMode: "stretch",
    width: width,
    justifyContent: "center",
    height: height - 240,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginTop: 25,
    fontFamily: "serif",
    alignSelf: "center",
  },
  inputContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    width: 385,
    height: height - 600,
    borderTopLeftRadius: 24,
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 24,
    alignSelf: "center",
    alignItems: "center",
  },
  loginButton: {
    width: 335,
    height: 65,
    backgroundColor: colors.PRIMARY,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textLoginButton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});

export { styles };
