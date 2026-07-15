import { teal, grey } from "@mui/material/colors";

const getDesignToknes = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for Light mode
          Color: {
            main: "#647488",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          Color: {
            main: teal[500],
          },
          favColor: {
            main: grey[600],
          },
        }),
  },
});

export default getDesignToknes;
