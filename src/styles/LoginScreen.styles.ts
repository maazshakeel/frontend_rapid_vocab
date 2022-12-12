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
});

export { styles };
