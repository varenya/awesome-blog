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
      <h2 className="text-2xl font-semibold  text-gray-900 font-nunito mb-10 uppercase">
        My blogs
      </h2>
      <ul role="list" className="m-0 ">
        {posts.map((item) => (
          <li key={item.id} className="mb-6">
            <ActiveLink href={`/post/${item.id}`}>
              <h3 className="text-xl font-semibold text-rose-600 font-nunito underline underline-offset-2">
                {item.title}
              </h3>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
