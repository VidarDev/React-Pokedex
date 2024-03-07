import { Pressable } from "react-native";

function ButtonVD(props: {
  onPress?: () => void;
  style?: object;
  children: React.ReactNode;
}) {
  return (
    <Pressable
      style={[props.style]}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  );
}

export default ButtonVD;
