import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

const CreatePost: NextPage = () => {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.100", "dark.800");
  const inputColor = useColorModeValue("gray.200", "dark.700");
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
      <Stack width="800px" m="auto" mt="2vh" spacing="2vh">
        <Flex
          flexDirection="column"
          alignItems="center"
          bgColor={bgColor}
          p="1vh 1vh 1vh 1vh"
          borderRadius="10px"
        >
          <Stack w="100%" mb="2vh">
            <Input
              bgColor={inputColor}
              variant="filled"
              placeholder="Title"
              color="black"
              onChange={(e) => setTitleValue(e.target.value)}
            />
            <Textarea
              placeholder="Body"
              onChange={(e) => setBodyValue(e.target.value)}
              bgColor={inputColor}
              variant="filled"
              mb="1vh"
              resize="vertical"
              h="60vh"
            />
          </Stack>
          <Flex justifyContent="flex-end" w="100%">
            <Button bgColor="teal" color="gray.100" onClick={createPost}>
              Create Post
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Layout>
  );
};

export default CreatePost;
