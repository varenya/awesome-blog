"use server";

import { createBlogPost } from "@/db/crud-post";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createNewPost(formData: FormData) {
  const cookiesStore = cookies();
  const title = formData.get("title");
  const content = (formData.get("content") as string) || undefined;
  const userId = cookiesStore.get("userId") || { value: "1" };
  if (typeof title !== "string") {
    return { error: "title is not present" };
  }

  const post = await createBlogPost({
    title,
    content,
    userId: parseInt(userId.value),
  });
  revalidatePath("/");
  redirect(`/post/${post.id}`);
}

export async function setUser(formData: FormData) {
  try {
    const userId = formData.get("userId");
    if (typeof userId !== "string") {
      throw new Error("userId is not set");
    }
    cookies().set("userId", userId);
  } catch (e) {
    return { message: "error setting the user" };
  }
  redirect("/");
}
