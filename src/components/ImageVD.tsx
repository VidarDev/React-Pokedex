import Animated from "react-native-reanimated";

function ImageSource(type: string) {
  if (type == "pokeball") return require("../../assets/pokeball.png");
  if (type == "unknown") return require("../../assets/unknown.png");
  return { uri: type };
}

function ImageVD(props: {
  source: string;
  entering?: any;
  exiting?: any;
  style?: object;
}) {
  const type = ImageSource(props.source);

  return (
    <Animated.Image
      entering={props.entering}
      exiting={props.exiting}
      source={type}
      style={[props.style]}
    />
  );
}

export default ImageVD;
