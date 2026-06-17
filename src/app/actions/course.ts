"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { CourseLevel } from "@prisma/client";

export async function createCourse(formData: FormData) {
  const name = formData.get("name") as string;
  const level = formData.get("level") as CourseLevel;
  const category = formData.get("category") as any;
  const duration = formData.get("duration") as string;
  const fees = formData.get("fees") as string;
  const eligibility = formData.get("eligibility") as string;
  const collegeName = formData.get("collegeName") as string;
  const description = formData.get("description") as string;
  const isActive = formData.get("isActive") === "true";

  // Create a slug from the name
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") + "-" + Math.random().toString(36).substring(2, 8);

  try {
    await prisma.course.create({
      data: {
        name,
        slug,
        level,
        category,
        duration,
        fees: fees || null,
        eligibility: eligibility || null,
        collegeName: collegeName || null,
        description: description || null,
        isActive,
      },
    });
  } catch (error) {
    console.error("Error creating course:", error);
    throw new Error("Failed to create course");
  }

  revalidatePath("/courses");
  redirect("/courses");
}

export async function updateCourse(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const level = formData.get("level") as CourseLevel;
  const category = formData.get("category") as any;
  const duration = formData.get("duration") as string;
  const fees = formData.get("fees") as string;
  const eligibility = formData.get("eligibility") as string;
  const collegeName = formData.get("collegeName") as string;
  const description = formData.get("description") as string;
  const isActive = formData.get("isActive") === "true";

  // Note: we don't update the slug because it might break SEO, or we could if requested.
  // For now, keeping the original slug is safer.

  try {
    await prisma.course.update({
      where: { id },
      data: {
        name,
        level,
        category,
        duration,
        fees: fees || null,
        eligibility: eligibility || null,
        collegeName: collegeName || null,
        description: description || null,
        isActive,
      },
    });
  } catch (error) {
    console.error("Error updating course:", error);
    throw new Error("Failed to update course");
  }

  revalidatePath("/courses");
  redirect("/courses");
}

export async function deleteCourse(id: string) {
  try {
    await prisma.course.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting course:", error);
    throw new Error("Failed to delete course");
  }

  revalidatePath("/courses");
}
