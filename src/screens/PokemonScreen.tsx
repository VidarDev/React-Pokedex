import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ImageVD from "@/components/ImageVD";
import MenuVD from "@/components/MenuVD";
import TextVD from "@/components/TextVD";
import ViewVD from "@/components/ViewVD";
import ErrorScreen from "@/screens/ErrorScreen";
import LoadingScreen from "@/screens/LoadingScreen";
import PokemonColorStyles from "@/styles/PokemonColorStyles";
import Styles from "@/styles/Styles";

function normalizeString(str: string) {
  return str
    .normalize("NFD") // Separate letters from accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .toLowerCase(); // Convert the string to lowercase
}

function StartScreen({ navigation, route }: { navigation: any; route: any }) {
  const [pokemon, setPokemon] = useState(route.params.pokemonRef);

  // Fetch Pokemon Data
  const fetchPokemon = async () => {
    const response = await axios.get(
      `https://tyradex.tech/api/v1/pokemon/${pokemon}`
    );
    console.log(response.data.pokedexId);
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: fetchPokemon,
    enabled: !!pokemon
  });

  // Dynamic style
  const typeName: string = data
    ? normalizeString(data.types[0].name.toLowerCase())
    : "unknow";
  const dynamicStyle =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    PokemonColorStyles[typeName] || PokemonColorStyles.unknow;

  useEffect(() => {
    if (route.params.pokemonRef) {
      setPokemon(route.params.pokemonRef);
    }
  }, [route.params.pokemonRef]);

  if (isPending) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

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
          <TextVD style={[Styles.font_24, Styles.weight_light]}>
            #{data.pokedexId}
          </TextVD>
          <TextVD style={[Styles.font_40, Styles.weight_bold]}>
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
              source={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${normalizeString(data.types[0].name)}.png`}
              style={[Screen.image, Styles.w_40, Styles.h_40]}
            />
            {data.types[1] && (
              <ImageVD
                source={`https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${normalizeString(data.types[1].name)}.png`}
                style={[Screen.image, Styles.w_40, Styles.h_40]}
              />
            )}
          </ViewVD>
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_column,
            Styles.flex_align_center,
            Styles.mb_16,
            Styles.mt_8
          ]}
        >
          <TextVD style={[Styles.font_24, Styles.weight_bold]}>
            Informations
          </TextVD>
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_row,
            Styles.w_full,
            Styles.flex_justify_space_between,
            Styles.flex_align_center,
            Styles.mb_8
          ]}
        >
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            Géneration
          </TextVD>
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            {data.generation}
          </TextVD>
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_row,
            Styles.w_full,
            Styles.flex_justify_space_between,
            Styles.flex_align_center,
            Styles.mb_8
          ]}
        >
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            Catégorie
          </TextVD>
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            {data.category.replace(/Pokémon/g, "")}
          </TextVD>
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_row,
            Styles.w_full,
            Styles.flex_justify_space_between,
            Styles.flex_align_center,
            Styles.mb_8
          ]}
        >
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            Hauteur
          </TextVD>
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            {data.height}
          </TextVD>
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_row,
            Styles.w_full,
            Styles.flex_justify_space_between,
            Styles.flex_align_center,
            Styles.mb_8
          ]}
        >
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>Poids</TextVD>
          <TextVD style={[Styles.font_20, Styles.weight_regular]}>
            {data.weight}
          </TextVD>
        </ViewVD>
        <ViewVD
          style={[
            Styles.flex_column,
            Styles.flex_align_center,
            Styles.mb_16,
            Styles.mt_8
          ]}
        >
          <TextVD style={[Styles.font_24, Styles.weight_bold]}>
            Statistiques
          </TextVD>
        </ViewVD>
        <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_8]}>
          <TextVD style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}>
            Point de vie
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.w_full,
              Styles.flex_justify_space_between,
              Styles.flex_align_center,

              Styles.gap_16
            ]}
          >
            <ViewVD
              style={[
                Styles.h_24,
                Styles.border_radius_8,
                Styles.bg_white,
                { width: data.stats.hp * 2 }
              ]}
            ></ViewVD>
            <TextVD style={[Styles.font_20, Styles.weight_regular]}>
              {data.stats.hp}
            </TextVD>
          </ViewVD>
        </ViewVD>
        <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_8]}>
          <TextVD style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}>
            Attaque
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.w_full,
              Styles.flex_justify_space_between,
              Styles.flex_align_center,

              Styles.gap_16
            ]}
          >
            <ViewVD
              style={[
                Styles.h_24,
                Styles.border_radius_8,
                Styles.bg_white,
                { width: data.stats.atk * 2 }
              ]}
            ></ViewVD>
            <TextVD style={[Styles.font_20, Styles.weight_regular]}>
              {data.stats.atk}
            </TextVD>
          </ViewVD>
        </ViewVD>
        <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_8]}>
          <TextVD style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}>
            Défense
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.w_full,
              Styles.flex_justify_space_between,
              Styles.flex_align_center,

              Styles.gap_16
            ]}
          >
            <ViewVD
              style={[
                Styles.h_24,
                Styles.border_radius_8,
                Styles.bg_white,
                { width: data.stats.def * 2 }
              ]}
            ></ViewVD>
            <TextVD style={[Styles.font_20, Styles.weight_regular]}>
              {data.stats.def}
            </TextVD>
          </ViewVD>
        </ViewVD>
        <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_8]}>
          <TextVD style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}>
            Attaque Spéciale
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.w_full,
              Styles.flex_justify_space_between,
              Styles.flex_align_center,

              Styles.gap_16
            ]}
          >
            <ViewVD
              style={[
                Styles.h_24,
                Styles.border_radius_8,
                Styles.bg_white,
                { width: data.stats.spe_atk * 2 }
              ]}
            ></ViewVD>
            <TextVD style={[Styles.font_20, Styles.weight_regular]}>
              {data.stats.spe_atk}
            </TextVD>
          </ViewVD>
        </ViewVD>
        <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_8]}>
          <TextVD style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}>
            Attaque Défense
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.w_full,
              Styles.flex_justify_space_between,
              Styles.flex_align_center,

              Styles.gap_16
            ]}
          >
            <ViewVD
              style={[
                Styles.h_24,
                Styles.border_radius_8,
                Styles.bg_white,
                { width: data.stats.spe_def * 2 }
              ]}
            ></ViewVD>
            <TextVD style={[Styles.font_20, Styles.weight_regular]}>
              {data.stats.spe_def}
            </TextVD>
          </ViewVD>
        </ViewVD>
        <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_64]}>
          <TextVD style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}>
            Vitesse
          </TextVD>
          <ViewVD
            style={[
              Styles.flex_row,
              Styles.w_full,
              Styles.flex_justify_space_between,
              Styles.flex_align_center,

              Styles.gap_16
            ]}
          >
            <ViewVD
              style={[
                Styles.h_24,
                Styles.border_radius_8,
                Styles.bg_white,
                { width: data.stats.vit * 2 }
              ]}
            ></ViewVD>
            <TextVD style={[Styles.font_20, Styles.weight_regular]}>
              {data.stats.vit}
            </TextVD>
          </ViewVD>
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

export default StartScreen;
