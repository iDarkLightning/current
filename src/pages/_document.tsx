import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <ColorModeScript initialColorMode="light" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
