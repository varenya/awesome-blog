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
