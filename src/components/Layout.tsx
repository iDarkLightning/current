import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Nav from "./Nav";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Current</title>
      </Head>
      <Box position="sticky" top={0} zIndex={1} pb="2vh" overflow="hidden">
        <Nav />
      </Box>
      <Flex
        flexDir="column"
        gap="1.5rem"
        maxW="80rem"
        mx="auto"
        px="2rem"
        pb="2rem"
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
