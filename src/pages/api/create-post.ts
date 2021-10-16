import { PrismaClient } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) return res.json({ error: "must be logged in!" });

  const { title, body } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      post: {
        create: {
          title,
          text: body,
        },
      },
    },
  });

  return res.json({ message: "success" });
};

export default handler;
