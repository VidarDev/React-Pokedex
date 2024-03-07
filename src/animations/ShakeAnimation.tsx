import { useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated";

function shakeAnimation() {
  const ANGLE = 10;
  const TIME = 100;
  const EASING = Easing.elastic(1.5);

  const rotation = useSharedValue(0);

  const shakeAnim = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }]
  }));

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        // deviate left to start from -ANGLE
        withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
        // wobble between -ANGLE and ANGLE 7 times
        withRepeat(
          withTiming(ANGLE, {
            duration: TIME,
            easing: EASING
          }),
          5,
          true
        ),
        // go back to 0 at the end
        withTiming(0, { duration: TIME * 6, easing: EASING })
      ),
      -1,
      true
    );
  }, []);

  return { shakeAnim };
}

export default shakeAnimation;
