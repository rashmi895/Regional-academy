"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;
  const tags = formData.get("tags") as string;
  const metaTitle = formData.get("metaTitle") as string;
  const metaDesc = formData.get("metaDesc") as string;
  const published = formData.get("published") === "true";

  // Create a URL-friendly slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") + "-" + Math.random().toString(36).substring(2, 8);

  try {
    await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        coverImage: coverImage || null,
        tags: tags || null,
        metaTitle: metaTitle || null,
        metaDesc: metaDesc || null,
        published,
        // Leaving authorId null as per plan for Demo Mode
      },
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Failed to create blog");
  }

  revalidatePath("/blogs");
  redirect("/blogs");
}
