type colorsType = { [key: string]: string };
type themeType = { colors: colorsType };
export const colors = {
  primary: "#F8AD15",
  seconday: "#0B677E",
  tealBlue: "#034B5E",
  osloGray: "#919499",
  silver: "#C4C4C4",
  jellyBean: "#298097",
  tundora: "#474747",
  gulfBlue: "#011258",
  dustyGray: "#979797",
  alabaster: "#F8F8F8",
  white: "#fff",
  mercury: "#E5E5E5",
  lightningYellow: "#FCBA2D",
};

export const theme: themeType = {
  colors,
};
