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
    width: 400,
    height: 290,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    marginTop: 5,
    fontFamily: "serif",
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    width: width,
    height: height - 375,
    borderTopLeftRadius: 24,
    position: "absolute",
    bottom: 0,
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
  forgotText: {
    color: "#83AEEF",
    alignSelf: "flex-end",
    marginRight: 35,
    marginTop: 5,
  },
  loginButton: {
    width: width - 27,
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
  bottomTextGrey: {
    color: colors.GREY,
    fontWeight: "bold",
    marginRight: 10,
  },
  bottomTextContainer: {
    display: "flex",
    width: 300,
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 20,
    flexDirection: "row",
  },
  bottomTextBlue: {
    color: "#83AEEF",
  },
});

export { styles };
