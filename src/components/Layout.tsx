import { Box, Flex, Table, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box position="sticky" top={0} zIndex={1} pb="2vh" overflow="hidden">
        <Nav />
      </Box>
      <Box height="100%" overflowY="auto">
        {children}
      </Box>
    </>
  );
};

export default Layout;
