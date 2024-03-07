import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import shakeAnimation from "@/animations/ShakeAnimation";
import widthAnimation from "@/animations/WidthAnimation";
import ImageVD from "@/components/ImageVD";
import Styles from "@/styles/Styles";
import useRandomNumber from "@/hooks/useRandomNumber";
import { Routes } from "@/navigation/Routes";

function HomeScreen({ navigation }: { navigation: any }) {
  const [readyNextStep, setReadyNextStep] = useState(false);

  // Animation part
  const { shakeAnim: shakeAnime } = shakeAnimation();
  const { widthAnim: widthAnim, widthAnimOnPress: widthAnimOnPress } =
    widthAnimation(250);

  // Navigation part
  const handlePress = () => {
    if (!readyNextStep) {
      setReadyNextStep(true);
      widthAnimOnPress();
    } else {
      navigation.navigate(Routes.POKEMON_SCREEN, {
        pokemonRef: useRandomNumber()
      });
    }
  };

  return (
    <SafeAreaView style={[Styles.areaView, Styles.bg_white]}>
      <Pressable
        onPress={handlePress}
        style={[
          Screen.pressableView,
          Styles.w_full,
          Styles.flex_align_center,
          Styles.flex_justify_center
        ]}
      >
        <Animated.View>
          <ImageVD
            source="pokeball"
            style={[Screen.pokeball, shakeAnime, widthAnim]}
          />
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  );
}

const Screen = StyleSheet.create({
  pokeball: {
    resizeMode: "contain"
  },
  pressableView: {
    flex: 1
  }
});

export default HomeScreen;
