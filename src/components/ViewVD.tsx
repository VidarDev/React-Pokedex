import Animated from "react-native-reanimated";

function ViewVD(props: {
  onPress?: () => void;
  style?: object;
  entering?: any;
  exiting?: any;
  children?: React.ReactNode;
}) {
  return <Animated.View entering={props.entering} exiting={props.exiting} style={[props.style]}>{props.children}</Animated.View>;
}

export default ViewVD;
