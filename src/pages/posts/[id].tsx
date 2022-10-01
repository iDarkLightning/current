import { Post, PrismaClient, User } from ".prisma/client";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

const prisma = new PrismaClient();

interface PostProps {
  post: Post & { user: User };
}

const PostPage: NextPage<PostProps> = ({ post }) => {
  const subTextColor = useColorModeValue("gray.700", "dark.200");

  return (
    <Layout>
      <Stack spacing="1rem">
        <Heading fontWeight="medium" fontSize="2rem">
          {post.title}
        </Heading>
        <Flex alignItems="center" justifyContent="flex-start" gap="0.75rem">
          <Avatar name={post.user.name} src={post.user.image} size="sm" />
          <Text>{post.user.name}</Text>
          <Text opacity="80%">
            {post.createdAt} · About {Math.floor(post.text.length / 1500) || 1}m
            read
          </Text>
        </Flex>
      </Stack>
      <Divider />
      <Text whiteSpace="pre-line" pb="2vh">
        {post.text}
      </Text>
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
