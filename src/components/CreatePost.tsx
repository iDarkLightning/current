import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const CreatePost: React.FC = () => {
  const session = useSession();

  if (session.status === "unauthenticated" || session.status === "loading")
    return null;

  return (
    <Link href="/create-post" passHref>
      <Button colorScheme="purple" leftIcon={<PlusSquareIcon />}>
        New Post
      </Button>
    </Link>
  );
};

export default CreatePost;
