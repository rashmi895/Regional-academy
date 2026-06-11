import { prisma } from "@/lib/prisma";
import CollegesClient from "./CollegesClient";

export const dynamic = "force-dynamic";

export default async function CollegesPage() {
  const colleges = await prisma.college.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      _count: {
        select: { courses: true },
      },
    },
  });

  return <CollegesClient initialColleges={colleges} />;
}
