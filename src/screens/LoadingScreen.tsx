import { SafeAreaView } from "react-native-safe-area-context";

import TextVD from "@/components/TextVD";
import Styles from "@/styles/Styles";

function LoadingScreen() {
  return (
    <SafeAreaView
      style={[
        Styles.areaView,
        Styles.w_full,
        Styles.flex_align_center,
        Styles.flex_justify_center
      ]}
    >
      <TextVD style={[Styles.font_32, Styles.black]}>En chargement...</TextVD>
    </SafeAreaView>
  );
}

export default LoadingScreen;
