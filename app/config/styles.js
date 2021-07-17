import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenier",
    color: colors.white,
  },
};
