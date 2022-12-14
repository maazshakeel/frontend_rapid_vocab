import { StyleSheet } from "react-native";
import colors from "../theme";

import { width, height } from "../utils/dimension.utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 35,
  },
  headerImage: {
    resizeMode: "stretch",
    width: 400,
    height: 290,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 50,
    color: "white",
    fontFamily: "serif",
    alignSelf: "flex-start",
    marginLeft: 15,
    width: width - 100,
  },
  inputContainer: {
    backgroundColor: "white",
    width: width,
    height: height - 450,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignSelf: "center",
    alignItems: "center",
  },
  emailInput: {
    backgroundColor: colors.GREY,
    width: width - 27,
    height: 65,
    marginTop: 15,
    borderRadius: 24,
    fontSize: 15,
    paddingLeft: 50,
  },
  loginButton: {
    width: width - 27,
    height: 65,
    backgroundColor: colors.PRIMARY,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textLoginButton: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  topTextGrey: {
    color: colors.GREY,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 55,
    width: 330,
    marginLeft: 15,
  },
  bottomTextContainer: {
    display: "flex",
    padding: 20,
    flexDirection: "row",
  },
  bottomTextBlue: {
    color: "#83AEEF",
  },
});

export { styles };
