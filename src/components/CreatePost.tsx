import { Flex } from "@chakra-ui/layout";
import { Avatar, Input, useColorModeValue } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = ({}) => {
  const { data: session } = useSession();
  const bgColor = useColorModeValue("gray.100", "dark.800");
  const inputColor = useColorModeValue("gray.200", "dark.700");
  const router = useRouter();

  return (
    <Flex
      width="800px"
      m="auto"
      justifyContent="space-evenly"
      alignItems="center"
      bgColor={bgColor}
      p="1vh 1vh 1vh 1vh"
      borderRadius="10px"
    >
      <Avatar name={session.user.name} src={session.user.image} />
      <Input
        onClick={() => router.push("/create-post")}
        width="60%"
        variant="filled"
        placeholder="Create Post..."
        bgColor={inputColor}
      />
    </Flex>
  );
};

export default CreatePost;
