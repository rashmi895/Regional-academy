"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function createCounsellor(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const isActive = formData.get("isActive") === "true";

  try {
    await prisma.counsellor.create({
      data: {
        name,
        phone,
        email: email || null,
        isActive,
      },
    });
  } catch (error) {
    console.error("Error creating counsellor:", error);
    throw new Error("Failed to create counsellor");
  }

  revalidatePath("/counsellors");
  redirect("/counsellors");
}
