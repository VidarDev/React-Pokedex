import Animated from "react-native-reanimated";

function ImageVD(props: {
  source: string;
  entering?: any;
  exiting?: any;
  style?: object
}) {
  const type =
    props.source !== "pokeball"
      ? { uri: props.source }
      : require("../../assets/pokeball.png");

  return (
    <Animated.Image
      entering={props.entering} exiting={props.exiting}
      source={type}
      style={[props.style]}
    />
  );
}

export default ImageVD;
