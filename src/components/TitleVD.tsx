import TextVD from "@/components/TextVD";
import ViewVD from "@/components/ViewVD";
import Styles from "@/styles/Styles";

function TitleVD(props: {
  entering?: any;
  exiting?: any;
  children: React.ReactNode;
}) {
  return (
    <ViewVD
      style={[
        Styles.flex_column,
        Styles.flex_align_center,
        Styles.mb_16,
        Styles.mt_8
      ]}
    >
      <TextVD
        entering={props.entering}
        style={[Styles.font_24, Styles.weight_bold]}
      >
        {props.children}
      </TextVD>
    </ViewVD>
  );
}

export default TitleVD;
