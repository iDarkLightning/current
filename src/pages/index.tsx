import { Post, PrismaClient, User } from ".prisma/client";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";
import CreatePost from "../components/CreatePost";
import Nav from "../components/Nav";
import NextLink from "next/link";
import Layout from "../components/Layout";

const prisma = new PrismaClient();

interface IIndexProps {
  posts: {
    updatedAt: string;
    createdAt: string;
    id: string;
    title: string;
    text: string;
    userId: string;
    user: User;
  }[];
}

const Index: NextPage<IIndexProps> = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <Layout>
      <Box mb="2vh">{session && <CreatePost />}</Box>
      <Stack m="auto" w="800px">
        {posts.map((post) => (
          <Box
            key={post.id}
            bgColor="gray.100"
            borderRadius="10px"
            p="5vh 5vh 5vh 5vh"
            as={Stack}
          >
            <Flex alignItems="center" justifyContent="flex-start">
              <Avatar
                name={post.user.name}
                src={post.user.image}
                size="sm"
                mr="1vh"
              />
              <Text color="gray.700">{post.user.name}</Text>
            </Flex>
            <Link>
              <NextLink href={`/posts/${post.id}`}>
                <Heading>{post.title}</Heading>
              </NextLink>
            </Link>
            <Text whiteSpace="pre-line">{post.text.substring(0, 150)}...</Text>
            <Text color="gray.700" fontSize="16px">
              {post.createdAt} · About {Math.floor(post.text.length / 1500)}m
              read
            </Text>
          </Box>
        ))}
      </Stack>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const posts = (await prisma.post.findMany({ include: { user: true } }))
    .map((post) => ({
      ...post,
      createdAt: post.createdAt.toLocaleDateString(),
    }))
    .map((post) => ({
      ...post,
      updatedAt: post.updatedAt.toLocaleDateString(),
    }));

  return {
    props: {
      posts,
    },
  };
};

export default Index;
