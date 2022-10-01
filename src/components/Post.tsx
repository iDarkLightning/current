import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import { Avatar, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { FormattedPost } from "../types/FormattedPost";

interface PostProps {
  post: FormattedPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const bgColor = useColorModeValue("gray.100", "dark.800");

  return (
    <NextLink href={`/posts/${post.id}`}>
      <Box
        key={post.id}
        bgColor={bgColor}
        borderRadius="0.75rem"
        p="2rem"
        as={Stack}
        cursor="pointer"
      >
        <Flex alignItems="center" justifyContent="flex-start" gap="1rem">
          <Avatar name={post.user.name} src={post.user.image} size="sm" />
          <Text opacity="80%">{post.user.name}</Text>
        </Flex>
        <Heading>{post.title}</Heading>
        <Text whiteSpace="pre-line">{post.text.substring(0, 150)}...</Text>
        <Text opacity="80%">
          {post.createdAt} · About {Math.floor(post.text.length / 1500) || 1}m
          read
        </Text>
      </Box>
    </NextLink>
  );
};

export default Post;
