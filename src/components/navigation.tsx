import { prisma } from "@/db/prisma-client";
import { ActiveLink } from "@/components/active-link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

export async function Navigation() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId") || { value: "1" };
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId.value, 10) },
    include: {
      posts: true,
    },
  });
  if (!user) {
    notFound();
  }
  const { posts } = user;
  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {posts.map((item) => (
          <li key={item.id}>
            <ActiveLink href={`/post/${item.id}`}>{item.title}</ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
