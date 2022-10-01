import { PrismaClient } from "@prisma/client";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import CreatePost from "../components/CreatePost";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { FormattedPost } from "../types/FormattedPost";

interface IIndexProps {
  posts: FormattedPost[];
}

const Index: NextPage<IIndexProps> = ({ posts }) => {
  return (
    <Layout>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h3" fontSize="2rem" fontWeight="medium">
          Feed
        </Heading>
        <CreatePost />
      </Flex>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

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
