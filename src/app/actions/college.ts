"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CollegeType } from "@prisma/client";

import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function createCollege(formData: FormData) {
  const name = formData.get("name") as string;
  const location = formData.get("location") as string;
  const city = formData.get("city") as string;
  const state = (formData.get("state") as string) || "Odisha";
  const type = formData.get("type") as CollegeType;
  const category = formData.get("category") as any;
  const description = formData.get("description") as string;
  const website = formData.get("website") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const rankingStr = formData.get("ranking") as string;
  
  const ranking = rankingStr ? parseInt(rankingStr) : null;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  let logoUrl = null;
  const logoFile = formData.get("logo") as File | null;
  
  if (logoFile && logoFile.size > 0) {
    const bytes = await logoFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // ignore directory exists error
    }

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = `${uniqueSuffix}-${logoFile.name.replace(/[^a-zA-Z0-9.]/g, "")}`;
    const filePath = path.join(uploadDir, filename);
    
    await writeFile(filePath, buffer);
    logoUrl = `/uploads/${filename}`;
  }

  try {
    await prisma.college.create({
      data: {
        name,
        slug,
        location,
        city,
        state,
        type,
        category,
        description,
        website,
        phone,
        email,
        logo: logoUrl,
        ranking,
        isActive: true,
      },
    });
  } catch (error) {
    console.error("Error creating college:", error);
    throw new Error("Failed to create college. Ensure the name is unique.");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function deleteCollege(id: string) {
  try {
    await prisma.college.delete({
      where: { id },
    });
    revalidatePath("/colleges");
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error deleting college:", error);
    throw new Error("Failed to delete college.");
  }
}
