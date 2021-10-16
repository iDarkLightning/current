import { Flex } from "@chakra-ui/layout";
import { Avatar, Input } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = ({}) => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Flex
      width="800px"
      m="auto"
      justifyContent="space-evenly"
      alignItems="center"
      bgColor="gray.100"
      p="1vh 1vh 1vh 1vh"
      borderRadius="10px"
    >
      <Avatar name={session.user.name} src={session.user.image} />
      <Input
        onClick={() => router.push("/create-post")}
        width="60%"
        variant="filled"
        placeholder="Create Post..."
        bgColor="gray.200"
      />
    </Flex>
  );
};

export default CreatePost;
