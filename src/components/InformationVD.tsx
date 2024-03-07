import TextVD from "@/components/TextVD";
import ViewVD from "@/components/ViewVD";
import Styles from "@/styles/Styles";

function InformationVD(props: {
  left_text: string;
  right_text: string;
  left_entering?: any;
  left_exiting?: any;
  right_entering?: any;
  right_exiting?: any;
}) {
  return (
    <ViewVD
      style={[
        Styles.flex_row,
        Styles.w_full,
        Styles.flex_justify_space_between,
        Styles.flex_align_center,
        Styles.mb_8
      ]}
    >
      <TextVD
        entering={props.left_entering}
        exiting={props.left_exiting}
        style={[Styles.font_20, Styles.weight_regular]}
      >
        {props.left_text}
      </TextVD>
      <TextVD
        entering={props.right_entering}
        exiting={props.right_exiting}
        style={[Styles.font_20, Styles.weight_regular]}
      >
        {props.right_text}
      </TextVD>
    </ViewVD>
  );
}

export default InformationVD;
