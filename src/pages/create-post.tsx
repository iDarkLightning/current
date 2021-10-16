import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
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
  const [bodyValue, setBodyValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const createPost = async () => {
    const res = await axios.post("api/create-post", {
      title: titleValue,
      body: bodyValue,
    });

    console.log(res.data);
    router.push("/");
  };

  return (
    <Layout>
      <Stack width="800px" m="auto" mt="2vh" spacing="2vh">
        <Flex
          flexDirection="column"
          alignItems="center"
          bgColor="gray.100"
          p="1vh 1vh 1vh 1vh"
          borderRadius="10px"
        >
          <Stack w="100%" mb="2vh">
            <Input
              bgColor="gray.200"
              variant="filled"
              placeholder="Title"
              color="black"
              onChange={(e) => setTitleValue(e.target.value)}
            />
            <Textarea
              placeholder="Body"
              onChange={(e) => setBodyValue(e.target.value)}
              bgColor="gray.200"
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
