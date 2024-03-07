import { useEffect, useState } from "react";
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
}) {
  const width = useSharedValue(props.right_text);

  const widthStyle = useAnimatedStyle(() => ({
    width: width.value * 1.8
  }));

  return (
    <ViewVD style={[Styles.flex_column, Styles.w_full, Styles.mb_8]}>
      <TextVD
        entering={props.left_entering}
        exiting={props.left_exiting}
        style={[Styles.font_20, Styles.weight_regular, Styles.mb_2]}
      >
        {props.left_text}
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
          entering={props.left_entering}
          exiting={props.left_exiting}
          style={[
            Styles.h_24,
            Styles.border_radius_4,
            Styles.bg_white,
            widthStyle
          ]}
        ></ViewVD>
        <TextVD
          entering={props.right_entering}
          exiting={props.right_exiting}
          style={[Styles.font_20, Styles.weight_regular]}
        >
          {props.right_text}
        </TextVD>
      </ViewVD>
    </ViewVD>
  );
}

export default StatVD;
