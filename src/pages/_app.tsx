import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <SessionProvider>
        <ColorModeProvider options={theme.config}>
          <Component {...pageProps} />
        </ColorModeProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default App;
