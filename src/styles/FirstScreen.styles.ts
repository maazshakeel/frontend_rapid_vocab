import { StyleSheet } from "react-native";
import colors from "../theme";

import {
  width,
  height,
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../utils/dimension.utils";

console.log(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: verticalScale(110),
  },
  headerImage: {
    resizeMode: "stretch",
    width: horizontalScale(160),
    justifyContent: "center",
    height: verticalScale(470),
  },
  headerText: {
    fontWeight: "bold",
    fontSize: moderateScale(15),
    color: "white",
    marginTop: verticalScale(10),
    fontFamily: "serif",
    alignSelf: "center",
  },
  inputContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    width: horizontalScale(380),
    height: verticalScale(200),
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
