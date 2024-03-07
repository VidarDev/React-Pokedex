import Animated from "react-native-reanimated";

function TextVD(props: {
  onPress?: () => void;
  style?: object;
  entering?: any;
  exiting?: any;
  children: React.ReactNode;
}) {
  return <Animated.Text entering={props.entering} exiting={props.exiting} style={[props.style]}>{props.children}</Animated.Text>;
}

export default TextVD;
