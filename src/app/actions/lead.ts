"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { LeadStatus } from "@prisma/client";

export async function createLead(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const city = formData.get("city") as string;
  const courseId = formData.get("courseId") as string;
  const collegeId = formData.get("collegeId") as string;
  const counsellorId = formData.get("counsellorId") as string;
  const status = formData.get("status") as LeadStatus;
  const notes = formData.get("notes") as string;

  try {
    await prisma.lead.create({
      data: {
        name,
        phone,
        email: email || null,
        city: city || null,
        courseId: courseId || null,
        collegeId: collegeId || null,
        counsellorId: counsellorId || null,
        status: status || "NEW",
        notes: notes || null,
      },
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    throw new Error("Failed to create lead");
  }

  revalidatePath("/leads");
  redirect("/leads");
}
