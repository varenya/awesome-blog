"use server";

import { createBlogPost } from "@/db/crud-post";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createNewPost(formData: FormData) {
  try {
    const cookiesStore = cookies();
    const title = formData.get("title");
    const content = (formData.get("content") as string) || undefined;
    const userId = cookiesStore.get("userId") || { value: "1" };
    if (typeof title !== "string") {
      return { error: "title is not present" };
    }

    await createBlogPost({ title, content, userId: parseInt(userId.value) });
    revalidatePath("/");
    return { message: "blog successfully created" };
  } catch (e) {
    return { message: "error creating a blog post" };
  }
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
}
