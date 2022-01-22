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
    <Flex justifyContent="space-between" p="2vh 5vh 2vh 5vh" bgColor={bgColor}>
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
          bgColor="teal"
          color="gray.100"
          _hover={{ bgColor: "teal.700" }}
        >
          {session ? "Sign Out" : "Sign In"}
        </Button>
        <IconButton
          aria-label="toggle-colour-mode"
          onClick={toggleColorMode}
          icon={showMoon ? <MoonIcon /> : <SunIcon />}
        />
      </HStack>
    </Flex>
  );
};

export default Nav;
