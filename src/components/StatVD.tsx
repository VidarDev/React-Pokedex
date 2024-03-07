import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";

import TextVD from "@/components/TextVD";
import ViewVD from "@/components/ViewVD";
import Styles from "@/styles/Styles";

function StatVD(props: {
  left_text: string;
  right_text: number;
  left_entering?: any;
  left_exiting?: any;
  right_entering?: any;
  right_exiting?: any;
  style?: object;
}) {
  const width = useSharedValue(props.right_text);

  const widthStyle = useAnimatedStyle(() => ({
    width: width.value + 24
  }));

  return (
    <ViewVD
      style={[
        Styles.flex_row,
        Styles.w_full,
        Styles.flex_justify_space_between,
        Styles.flex_align_center,
        Styles.gap_16,
        Styles.mb_8,
        props.style
      ]}
    >
      <TextVD
        entering={props.left_entering}
        exiting={props.left_exiting}
        style={[Styles.font_20, Styles.weight_regular]}
      >
        {props.left_text}
      </TextVD>
      <ViewVD
        entering={props.right_entering}
        exiting={props.right_exiting}
        style={[
          Styles.h_32,
          Styles.border_radius_4,
          Styles.bg_white,
          Styles.flex_row,
          Styles.flex_justify_flex_end,
          Styles.flex_align_center,
          Stat.progressBar,
          widthStyle
        ]}
      >
        <TextVD
          style={[Styles.font_20, Styles.weight_regular, Styles.m_inline_8]}
        >
          {props.right_text}
        </TextVD>
      </ViewVD>
    </ViewVD>
  );
}

const Stat = StyleSheet.create({
  progressBar: {
    borderColor: "#b0b0b0",
    borderWidth: 1,
    maxWidth: "100%"
  }
});

export default StatVD;
