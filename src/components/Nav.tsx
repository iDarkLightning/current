import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { useEffect } from "react";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  const { data: session } = useSession();
  const { toggleColorMode } = useColorMode();
  const showMoon = useColorModeValue(true, false);
  const bgColor = useColorModeValue("gray.100", "dark.800");
  const textColor = useColorModeValue("black", "darkText");

  return (
    <Flex py="1.5rem" px="4rem" bgColor={bgColor}>
      <Flex
        justifyContent="space-between"
        maxW="80rem"
        w="100%"
        mx="auto"
        px="2rem"
      >
        <NextLink href="/">
          <Heading _hover={{ cursor: "pointer" }} color={textColor}>
            Current
          </Heading>
        </NextLink>
        <HStack>
          {session && (
            <Avatar name={session.user.name} src={session.user.image} />
          )}
          <Button
            onClick={() => (!session ? signIn() : signOut())}
            colorScheme="purple"
          >
            {session ? "Sign Out" : "Sign In"}
          </Button>
          <IconButton
            aria-label="toggle-colour-mode"
            onClick={toggleColorMode}
            colorScheme="gray"
            icon={showMoon ? <MoonIcon /> : <SunIcon />}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Nav;
