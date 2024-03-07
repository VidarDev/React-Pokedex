import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  BounceIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ImageVD from "@/components/ImageVD";
import InformationVD from "@/components/InformationVD";
import MenuVD from "@/components/MenuVD";
import StatVD from "@/components/StatVD";
import TextVD from "@/components/TextVD";
import TitleVD from "@/components/TitleVD";
import ViewVD from "@/components/ViewVD";
import ErrorScreen from "@/screens/ErrorScreen";
import LoadingScreen from "@/screens/LoadingScreen";
import PokemonColorStyles from "@/styles/PokemonColorStyles";
import Styles from "@/styles/Styles";

function formatString(str: string) {
  return str
    .normalize("NFD") // Separate letters from accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .toLowerCase(); // Convert the string to lowercase
}

function formatNumber(nbr: number) {
  // Convert number to string
  let nbrStr: string = nbr.toString();

  // If the number has less than 3 digits, add zeros to the left
  while (nbrStr.length < 3) {
    nbrStr = "0" + nbrStr;
  }

  return nbrStr;
}

function StartScreen({ navigation, route }: { navigation: any; route: any }) {
  const [pokemon, setPokemon] = useState(route.params.pokemonRef);

  // Fetch Pokemon Data
  const fetchPokemon = async () => {
    const response = await axios.get(
      `https://tyradex.tech/api/v1/pokemon/${pokemon}`
    );
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: fetchPokemon,
    enabled: !!pokemon
  });

  // Dynamic style
  const typeName: string = data?.types?.[0]?.name?.toLowerCase() || "unknown";
  const dynamicStyle = PokemonColorStyles[formatString(typeName)] || PokemonColorStyles.unknown;

  useEffect(() => {
    if (route.params.pokemonRef) {
      setPokemon(route.params.pokemonRef);
    }
  }, [route.params.pokemonRef]);

  if (isPending) return <LoadingScreen />;

  if (data.status == "404") return <ErrorScreen navigation={navigation} />;

  return (
    <SafeAreaView style={[dynamicStyle, Styles.areaView, Styles.black]}>
      <MenuVD navigation={navigation} />
      <Animated.ScrollView
        style={[Screen.scrollView, Styles.m_inline_16, Styles.mt_16]}
      >
        <ViewVD
          style={[Styles.flex_row, Styles.flex_justify_center, Styles.w_full]}
        >
          <ImageVD
            entering={BounceIn}
            source={data.sprites.regular}
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
            #{formatNumber(data.pokedex_id)}
          </TextVD>
          <TextVD
            entering={FadeInUp.delay(100)}
            style={[Styles.font_40, Styles.weight_bold]}
          >
            {data.name.fr}
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.flex_justify_center,
              Styles.mt_8,
              Styles.gap_8
            ]}
          >
            <ImageVD
              entering={BounceIn.delay(200)}
              source={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${formatString(data.types[0].name)}.png`}
              style={[Screen.image, Styles.w_40, Styles.h_40]}
            />
            {data.types[1] && (
              <ImageVD
                entering={BounceIn.delay(300)}
                source={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${formatString(data.types[1].name)}.png`}
                style={[Screen.image, Styles.w_40, Styles.h_40]}
              />
            )}
          </ViewVD>
        </ViewVD>
        <TitleVD entering={FadeInUp.delay(200)}>Informations</TitleVD>
        <InformationVD
          left_text="Géneration"
          left_entering={FadeInLeft.delay(50)}
          right_text={data.generation}
          right_entering={FadeInRight.delay(50)}
        />
        <InformationVD
          left_text="Catégorie"
          left_entering={FadeInLeft.delay(100)}
          right_text={data.category.replace(/Pokémon/g, "")}
          right_entering={FadeInRight.delay(100)}
        />
        <InformationVD
          left_text="Hauteur"
          left_entering={FadeInLeft.delay(150)}
          right_text={data.height}
          right_entering={FadeInRight.delay(150)}
        />
        <InformationVD
          left_text="Poids"
          left_entering={FadeInLeft.delay(200)}
          right_text={data.weight}
          right_entering={FadeInRight.delay(200)}
        />
        <TitleVD entering={FadeInUp.delay(200)}>Statistiques</TitleVD>
        <StatVD
          left_text="Point de vie"
          left_entering={FadeInLeft.delay(50)}
          right_text={data.stats.hp}
          right_entering={FadeInRight.delay(50)}
        />
        <StatVD
          left_text="Attaque"
          left_entering={FadeInLeft.delay(100)}
          right_text={data.stats.atk}
          right_entering={FadeInRight.delay(100)}
        />
        <StatVD
          left_text="Défense"
          left_entering={FadeInLeft.delay(150)}
          right_text={data.stats.def}
          right_entering={FadeInRight.delay(150)}
        />
        <StatVD
          left_text="Attaque Spé"
          left_entering={FadeInLeft.delay(200)}
          right_text={data.stats.spe_atk}
          right_entering={FadeInRight.delay(200)}
        />
        <StatVD
          left_text="Défense Spé"
          left_entering={FadeInLeft.delay(250)}
          right_text={data.stats.spe_def}
          right_entering={FadeInRight.delay(250)}
        />
        <StatVD
          left_text="Vitesse"
          left_entering={FadeInLeft.delay(300)}
          right_text={data.stats.vit}
          right_entering={FadeInRight.delay(300)}
          style={[Styles.pb_32]}
        />
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

export default StartScreen;
