import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
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
import React from "react";

const Nav: React.FC = () => {
  const { data: session } = useSession();
  const { toggleColorMode } = useColorMode();
  const showMoon = useColorModeValue(true, false);
  const bgColor = useColorModeValue("gray.100", "dark.800");
  const borderColor = useColorModeValue("gray.200", "dark.700");

  return (
    <Flex
      py="1.5rem"
      bgColor={bgColor}
      shadow="sm"
      borderBottom="2px solid"
      borderBottomColor={borderColor}
    >
      <Flex
        justifyContent="space-between"
        maxW="80rem"
        w="100%"
        mx="auto"
        px="2rem"
      >
        <NextLink href="/">
          <Heading _hover={{ cursor: "pointer" }}>Current</Heading>
        </NextLink>
        <HStack>
          <IconButton
            aria-label="toggle-colour-mode"
            onClick={toggleColorMode}
            colorScheme="gray"
            size="sm"
            icon={showMoon ? <MoonIcon /> : <SunIcon />}
          />
          <Button
            onClick={() => (!session ? signIn() : signOut())}
            colorScheme="gray"
            size="sm"
          >
            {session ? "Sign Out" : "Sign In"}
          </Button>
          {session && (
            <Avatar
              name={session.user.name}
              src={session.user.image}
              size="sm"
            />
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Nav;
