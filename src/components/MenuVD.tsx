import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { ZoomInLeft, ZoomInRight } from "react-native-reanimated";
import { NavArrowLeft, Search } from "iconoir-react-native";

import ButtonVD from "@/components/ButtonVD";
import ViewVD from "@/components/ViewVD";
import { Routes } from "@/navigation/Routes";
import Styles from "@/styles/Styles";

function MenuVD(props: { navigation: any }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const inputSubmit = () => {
    props.navigation.navigate(Routes.POKEMON_SCREEN, {
      pokemonRef: inputValue
    });
  };

  const goBack = () => {
    props.navigation.navigate(Routes.HOME_SCREEN);
  };

  return (
    <ViewVD
      style={[
        Screen.navigation,
        Styles.p_inline_16,
        Styles.w_full,
        Styles.flex_row,
        Styles.flex_justify_space_between
      ]}
    >
      <ViewVD
        entering={ZoomInLeft}
        style={[Styles.flex_row, Styles.flex_align_center]}
      >
        <ButtonVD
          style={[
            Styles.bg_white,
            Styles.p_8,
            Styles.h_48,
            Styles.flex_row,
            Styles.flex_justify_center,
            Styles.flex_align_center,
            Styles.border_radius_8,
            Screen.border
          ]}
          onPress={goBack}
        >
          <NavArrowLeft
            color="#1c2226"
            height={32}
            width={32}
          ></NavArrowLeft>
        </ButtonVD>
      </ViewVD>
      <ViewVD
        entering={ZoomInRight}
        style={[Styles.flex_row, Styles.flex_align_center]}
      >
        <TextInput
          style={[
            Screen.inputSearch,
            Styles.bg_white,
            Styles.p_inline_16,
            Styles.h_48,
            Styles.flex_row,
            Styles.flex_justify_center,
            Styles.flex_align_center,
            Styles.border_radius_8,
            Styles.font_16,
            Screen.border
          ]}
          onChangeText={handleInputChange}
          value={inputValue}
          keyboardType="default"
          placeholder="Chercher un pokémon"
          onSubmitEditing={inputSubmit}
        />
        <ButtonVD
          style={[
            Styles.bg_white,
            Styles.p_8,
            Styles.h_48,
            Styles.flex_row,
            Styles.flex_justify_center,
            Styles.flex_align_center,
            Styles.border_radius_8,
            Styles.w_48,
            Screen.border
          ]}
          onPress={inputSubmit}
        >
          <Search
            color="#1c2226"
            height={24}
            width={24}
          ></Search>
        </ButtonVD>
      </ViewVD>
    </ViewVD>
  );
}

const Screen = StyleSheet.create({
  border: {
    borderColor: "#b0b0b0",
    borderWidth: 1
  },
  inputSearch: {
    transform: [{ translateX: 16 }],
    width: 200
  },
  navigation: {
    zIndex: 1
  }
});

export default MenuVD;
