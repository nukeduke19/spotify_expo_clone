import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.black,
    card: colors.darkGrey,
    text: colors.grey,
    border: colors.white,
  },
};
