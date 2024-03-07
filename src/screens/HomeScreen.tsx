import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ZoomInEasyUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import shakeAnimation from "@/animations/ShakeAnimation";
import widthAnimation from "@/animations/WidthAnimation";
import ImageVD from "@/components/ImageVD";
import ViewVD from "@/components/ViewVD";
import useRandomNumber from "@/hooks/useRandomNumber";
import { Routes } from "@/navigation/Routes";
import Styles from "@/styles/Styles";

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
        <ViewVD entering={ZoomInEasyUp}>
          <ImageVD
            source="pokeball"
            style={[Screen.pokeball, shakeAnime, widthAnim]}
          />
        </ViewVD>
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
