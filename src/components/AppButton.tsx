import { Button } from "native-base";
import colors from "../theme";

interface IProps {
  navigation: any;
  radius: number;
  text: string;
}

const AppButton = ({ navigation, radius, text }: IProps) => {
  return (
    <Button
      style={{
        backgroundColor: colors.PRIMARY,
        alignSelf: "center",
        borderRadius: radius,
      }}
      maxW="400"
      height="70"
      width="320"
      mt="10"
      _text={{
        fontSize: 18,
      }}
      onPress={() => navigation.openDrawer()}
    >
      {text}
    </Button>
  );
};

export default AppButton;
