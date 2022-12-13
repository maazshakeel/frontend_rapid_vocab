import { StyleSheet } from "react-native";
import colors from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 65,
  },
  headerImage: {
    resizeMode: "stretch",
    width: 350,
    height: 240,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 32,
    color: "white",
    fontFamily: "serif",
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    width: 385,
    height: 450,
    marginTop: 13,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignSelf: "center",
    alignItems: "center",
    flex: 1,
  },
  emailInput: {
    backgroundColor: colors.GREY,
    width: 335,
    height: 70,
    marginTop: 15,
    borderRadius: 24,
    fontSize: 15,
    paddingLeft: 50,
  },
  loginButton: {
    width: 335,
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
  bottomTextGrey: {
    color: colors.GREY,
    fontWeight: "bold",
    marginRight: 10,
  },
  bottomTextContainer: {
    display: "flex",
    padding: 20,
    flexDirection: "row",
    width: 435,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTextBlue: {
    color: "#83AEEF",
  },
});

export { styles };
