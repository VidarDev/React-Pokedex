import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextVD from "@/components/TextVD";
import PokemonColorStyles from "@/styles/PokemonColorStyles";
import Styles from "@/styles/Styles";

function ErrorScreen() {
  return (
    <SafeAreaView
      style={[
        Styles.areaView,
        Styles.w_full,
        Styles.flex_align_center,
        Styles.flex_justify_center,
        PokemonColorStyles.unknow
      ]}
    >
      <TextVD style={[Styles.font_32, Styles.black]}>Inconnu</TextVD>
    </SafeAreaView>
  );
}

export default ErrorScreen;
