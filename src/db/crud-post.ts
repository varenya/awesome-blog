import { prisma } from "@/db/prisma-client";

export async function createBlogPost({
  title,
  content,
  userId,
}: {
  title: string;
  content?: string;
  userId: number;
}) {
  const post = await prisma.post.create({
    data: { title, content, author: { connect: { id: userId } } },
  });
  return post;
}

export async function getUser({ id }: { id: string }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      posts: true,
    },
  });
  return user;
}
