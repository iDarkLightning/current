import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = ({}) => {
  return (
    <Link href="/create-post" passHref>
      <Button colorScheme="purple" leftIcon={<PlusSquareIcon />}>
        New Post
      </Button>
    </Link>
  );
};

export default CreatePost;
