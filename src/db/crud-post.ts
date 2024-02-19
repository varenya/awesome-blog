import { prisma } from "@/db/prisma-client";

export async function createBlogPost({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  await prisma.post.create({
    data: { title, content, author: { connect: { id: 2 } } },
  });
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
