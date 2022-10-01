import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
    dark: {
      100: "#DEE3EA",
      200: "#B2BDCD",
      300: "#5D7290",
      400: "#4F617A",
      500: "#404F64",
      600: "#323D4D",
      700: "#242C37",
      800: "#151A21",
      900: "#0B0E11",
    },
    accent: "#3EB78C",
    darkText: "#DEE3EA",
  },
  // styles: {
  //   global: (props) => ({
  //     body: {
  //       backgroundColor: mode("white", "dark.900")(props),
  //       color: mode("black", "white")(props),
  //     },
  //   }),
  // },
  styles: {
    global: (props) => {
      return {
        body: {
          backgroundColor: mode("white", "dark.900")(props),
          color: mode("darkText", "white")(props),
        },
      };
    },
  },
  config,
});

export default theme;
