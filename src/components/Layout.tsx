import { Box, Flex, Table, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const bgColor = useColorModeValue("white", "dark.900");
  const textColor = useColorModeValue("black", "darkText");
  const scrollColor = useColorModeValue("gray", "#242C37");

  return (
    <Flex
      bgColor={bgColor}
      color={textColor}
      flexDirection="column"
      height="100vh"
    >
      <Box position="sticky" top={0} zIndex={1} pb="2vh" overflow="hidden">
        <Nav />
      </Box>
      <Box
        height="100%"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-thumb": {
            background: scrollColor,
            borderRadius: "25px",
          },
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
