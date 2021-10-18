import { User } from "@prisma/client";

export interface FormattedPost {
  updatedAt: string;
  createdAt: string;
  id: string;
  title: string;
  text: string;
  userId: string;
  user: User;
}
