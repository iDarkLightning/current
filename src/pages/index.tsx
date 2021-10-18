import { PrismaClient } from ".prisma/client";
import { Box, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";
import CreatePost from "../components/CreatePost";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { FormattedPost } from "../types/FormattedPost";

const prisma = new PrismaClient();

interface IIndexProps {
  posts: FormattedPost[];
}

const Index: NextPage<IIndexProps> = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <Layout>
      <Box mb="2vh">{session && <CreatePost />}</Box>
      <Stack m="auto" w="800px" mb="2vh">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
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
