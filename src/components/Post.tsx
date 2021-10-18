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
  const subTextColor = useColorModeValue("gray.700", "dark.200");

  return (
    <Box
      key={post.id}
      bgColor={bgColor}
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
        <Text color={subTextColor}>{post.user.name}</Text>
      </Flex>
      <Link>
        <NextLink href={`/posts/${post.id}`}>
          <Heading>{post.title}</Heading>
        </NextLink>
      </Link>
      <Text whiteSpace="pre-line">{post.text.substring(0, 150)}...</Text>
      <Text color={subTextColor} fontSize="16px">
        {post.createdAt} · About {Math.floor(post.text.length / 1500) || 1}m
        read
      </Text>
    </Box>
  );
};

export default Post;
