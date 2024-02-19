"use server";

import { createBlogPost } from "@/db/crud-post";
import { revalidatePath } from "next/cache";

export async function createNewPost(formData: FormData) {
  try {
    const title = formData.get("title");
    const content = (formData.get("content") as string) || undefined;
    if (typeof title !== "string") {
      return { error: "title is not present" };
    }

    await createBlogPost({ title, content });
    revalidatePath("/");
    return { message: "blog successfully created" };
  } catch (e) {
    return { message: "error creating a blog post" };
  }
}
