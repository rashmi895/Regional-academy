import prisma from "@/lib/prisma";
import { CoursesClient } from "./CoursesClient";

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      name: true,
      level: true,
      duration: true,
      collegeName: true,
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <CoursesClient courses={courses} />;
}
