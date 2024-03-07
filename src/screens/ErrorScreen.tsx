import { StyleSheet } from "react-native";
import Animated, { BounceIn, FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import ImageVD from "@/components/ImageVD";
import MenuVD from "@/components/MenuVD";
import TextVD from "@/components/TextVD";
import ViewVD from "@/components/ViewVD";
import PokemonColorStyles from "@/styles/PokemonColorStyles";
import Styles from "@/styles/Styles";

function ErrorScreen(props: { navigation: any }) {
  return (
    <SafeAreaView
      style={[PokemonColorStyles.unknown, Styles.areaView, Styles.black]}
    >
      <MenuVD navigation={props.navigation} />
      <Animated.ScrollView
        style={[Screen.scrollView, Styles.m_inline_16, Styles.mt_16]}
      >
        <ViewVD
          style={[Styles.flex_row, Styles.flex_justify_center, Styles.w_full]}
        >
          <ImageVD
            entering={BounceIn}
            source="unknown"
            style={[Screen.image]}
          />
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_column,
            Styles.flex_align_center,
            Styles.mt_24,
            Styles.mb_24
          ]}
        >
          <TextVD
            entering={FadeInUp}
            style={[Styles.font_24, Styles.weight_light]}
          >
            #ERREUR
          </TextVD>
          <TextVD
            entering={FadeInUp.delay(100)}
            style={[Styles.font_40, Styles.weight_bold]}
          >
            Inconnu
          </TextVD>
        </ViewVD>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const Screen = StyleSheet.create({
  image: {
    aspectRatio: 1,
    width: "90%"
  },
  scrollView: {
    paddingTop: 16
  }
});

export default ErrorScreen;
