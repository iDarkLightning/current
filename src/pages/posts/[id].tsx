import { Post, PrismaClient, User } from ".prisma/client";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

const prisma = new PrismaClient();

interface PostProps {
  post: Post & { user: User };
}

const PostPage: NextPage<PostProps> = ({ post }) => {
  return (
    <Layout>
      <Box w="800px" m="auto" as={Stack}>
        <Box as={Stack} m="2vh 0 2vh 0">
          <Heading>{post.title}</Heading>
          <Flex alignItems="center" justifyContent="flex-start">
            <Avatar
              name={post.user.name}
              src={post.user.image}
              size="sm"
              mr="1vh"
            />
            <Text mr="1vh">{post.user.name}</Text>
            <Text color="gray.700" fontSize="16px">
              {post.createdAt} · About {Math.floor(post.text.length / 1500)}m
              read
            </Text>
          </Flex>
        </Box>
        <Divider />
        <Text whiteSpace="pre-line">{post.text}</Text>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const post = await prisma.post.findUnique({
    where: { id: id as string },
    include: { user: true },
  });

  return {
    props: {
      post: {
        ...post,
        createdAt: post.createdAt.toLocaleDateString(),
        updatedAt: post.updatedAt.toLocaleDateString(),
      },
    },
  };
};

export default PostPage;