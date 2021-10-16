import { Avatar, Box, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import React from "react";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  const { data: session } = useSession();

  return (
    <Flex justifyContent="space-between" p="2vh 5vh 2vh 5vh" bgColor="gray.100">
      <NextLink href="/">
        <Heading _hover={{ cursor: "pointer" }}>Current</Heading>
      </NextLink>
      <HStack>
        {session && (
          <Avatar name={session.user.name} src={session.user.image} />
        )}
        <Button
          onClick={() => (!session ? signIn("google") : signOut())}
          bgColor="teal"
          color="gray.100"
          _hover={{ bgColor: "teal.700" }}
        >
          {session ? "Sign Out" : "Sign In"}
        </Button>
      </HStack>
    </Flex>
  );
};

export default Nav;
