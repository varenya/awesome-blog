import { prisma } from "db";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

export default async function Post({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId") || { value: "1" };
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id, 10), authorId: parseInt(userId.value) },
  });
  if (!post) {
    notFound();
  }
  return (
    <div className={""}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-10">
            {post.title}
          </h2>

          <div className="">
            <div className="col-span-full">
              <div className="mt-2">
                {post.content ? <p>{post.content}</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
