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
        <meta property="og:title" content="Current" />
        <meta property="og:site_name" content="Current" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://current.nirnath.tech" />
        <meta
          property="og:description"
          content="A blog made as a demo for TechCodes' intermediate class"
        />
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
