import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Layout from "../components/Layout";

const CreatePost: NextPage = () => {
  const router = useRouter();
  const [bodyValue, setBodyValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const createPost = async () => {
    await axios.post("api/create-post", {
      title: titleValue,
      body: bodyValue,
    });

    router.push("/");
  };

  return (
    <Layout>
      <Stack spacing="1.25rem" maxW="80rem" mx="auto" w="100%">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading fontWeight="medium" fontSize="1.5rem">
              Create a New Post
            </Heading>
            <Text opacity="80%">Share what's on your mind!</Text>
          </Box>
          <Button
            onClick={createPost}
            colorScheme="purple"
            leftIcon={<PlusSquareIcon />}
          >
            Create Post
          </Button>
        </Flex>
        <Stack w="100%" mb="2vh">
          <Input
            variant="filled"
            placeholder="Title"
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <Textarea
            placeholder="Body"
            onChange={(e) => setBodyValue(e.target.value)}
            variant="filled"
            resize="vertical"
            minH="40vh"
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default CreatePost;
