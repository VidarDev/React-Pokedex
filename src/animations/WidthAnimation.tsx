import {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";

function WidthAnimation(initialWidth: number = 200) {
  const width = useSharedValue(initialWidth);

  const widthAnim = useAnimatedStyle(() => ({
    width: width.value
  }));

  const widthAnimOnPress = () => {
    width.value = withSpring(width.value * 1.25, { damping: 25 });
  };

  return { widthAnim, widthAnimOnPress };
}

export default WidthAnimation;
