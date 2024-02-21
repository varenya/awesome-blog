import { prisma } from "@/db/prisma-client";
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
							<label
								htmlFor="content"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Content
							</label>
							<div className="mt-2">
								<textarea
									id="content"
									name="content"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									{post.content}
								</textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
