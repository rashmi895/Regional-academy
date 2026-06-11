import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@regionalacademy.co.in" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@regionalacademy.co.in",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
  console.log("✅ Admin user created:", admin.email);

  // Create colleges
  const colleges = await Promise.all([
    prisma.college.upsert({
      where: { slug: "kiit-university" },
      update: {},
      create: {
        name: "KIIT University",
        slug: "kiit-university",
        location: "Patia, Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        type: "DEEMED",
        description: "Kalinga Institute of Industrial Technology",
        website: "https://kiit.ac.in",
        ranking: 1,
        isActive: true,
      },
    }),
    prisma.college.upsert({
      where: { slug: "soa-university" },
      update: {},
      create: {
        name: "SOA University",
        slug: "soa-university",
        location: "Khandagiri, Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        type: "DEEMED",
        description: "Siksha O Anusandhan University",
        website: "https://soa.ac.in",
        ranking: 2,
        isActive: true,
      },
    }),
    prisma.college.upsert({
      where: { slug: "centurion-university" },
      update: {},
      create: {
        name: "Centurion University",
        slug: "centurion-university",
        location: "Jatni, Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        type: "PRIVATE",
        description: "Centurion University of Technology and Management",
        website: "https://cutm.ac.in",
        ranking: 3,
        isActive: true,
      },
    }),
    prisma.college.upsert({
      where: { slug: "birla-global-university" },
      update: {},
      create: {
        name: "Birla Global University",
        slug: "birla-global-university",
        location: "Gothapatna, Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        type: "PRIVATE",
        description: "Birla Global University",
        website: "https://bgu.ac.in",
        ranking: 4,
        isActive: true,
      },
    }),
    prisma.college.upsert({
      where: { slug: "utkal-university" },
      update: {},
      create: {
        name: "Utkal University",
        slug: "utkal-university",
        location: "Vani Vihar, Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        type: "GOVERNMENT",
        description: "Utkal University - Oldest university in Odisha",
        ranking: 5,
        isActive: true,
      },
    }),
    prisma.college.upsert({
      where: { slug: "nit-rourkela" },
      update: {},
      create: {
        name: "NIT Rourkela",
        slug: "nit-rourkela",
        location: "Rourkela",
        city: "Rourkela",
        state: "Odisha",
        type: "GOVERNMENT",
        description: "National Institute of Technology Rourkela",
        ranking: 6,
        isActive: true,
      },
    }),
  ]);
  console.log(`✅ ${colleges.length} colleges created`);

  // Create courses
  const courses = await Promise.all([
    prisma.course.upsert({
      where: { slug: "btech-computer-science" },
      update: {},
      create: {
        name: "B.Tech Computer Science",
        slug: "btech-computer-science",
        level: "UG",
        duration: "4 Years",
        fees: "₹4-12 Lakhs",
        eligibility: "10+2 with PCM, JEE Main",
        collegeId: colleges[0].id,
      },
    }),
    prisma.course.upsert({
      where: { slug: "mba" },
      update: {},
      create: {
        name: "MBA",
        slug: "mba",
        level: "PG",
        duration: "2 Years",
        fees: "₹6-15 Lakhs",
        eligibility: "Graduation + CAT/MAT/XAT",
        collegeId: colleges[0].id,
      },
    }),
    prisma.course.upsert({
      where: { slug: "mbbs" },
      update: {},
      create: {
        name: "MBBS",
        slug: "mbbs",
        level: "UG",
        duration: "5.5 Years",
        fees: "₹5-25 Lakhs",
        eligibility: "10+2 with PCB, NEET",
        collegeId: colleges[1].id,
      },
    }),
    prisma.course.upsert({
      where: { slug: "bba" },
      update: {},
      create: {
        name: "BBA",
        slug: "bba",
        level: "UG",
        duration: "3 Years",
        fees: "₹2-6 Lakhs",
        eligibility: "10+2 any stream",
        collegeId: colleges[2].id,
      },
    }),
    prisma.course.upsert({
      where: { slug: "bca" },
      update: {},
      create: {
        name: "BCA",
        slug: "bca",
        level: "UG",
        duration: "3 Years",
        fees: "₹2-5 Lakhs",
        eligibility: "10+2 with Mathematics",
        collegeId: colleges[3].id,
      },
    }),
  ]);
  console.log(`✅ ${courses.length} courses created`);

  // Create exams
  const exams = await Promise.all([
    prisma.exam.upsert({
      where: { slug: "jee-main-2026" },
      update: {},
      create: {
        name: "JEE Main 2026",
        slug: "jee-main-2026",
        type: "JEE",
        examDate: new Date("2026-04-15"),
        registrationDeadline: new Date("2026-03-01"),
        description: "Joint Entrance Examination Main",
        eligibility: "10+2 with PCM",
        officialWebsite: "https://jeemain.nta.nic.in",
      },
    }),
    prisma.exam.upsert({
      where: { slug: "neet-2026" },
      update: {},
      create: {
        name: "NEET 2026",
        slug: "neet-2026",
        type: "NEET",
        examDate: new Date("2026-05-05"),
        registrationDeadline: new Date("2026-03-15"),
        description: "National Eligibility Entrance Test",
        eligibility: "10+2 with PCB",
        officialWebsite: "https://neet.nta.nic.in",
      },
    }),
    prisma.exam.upsert({
      where: { slug: "ojee-2026" },
      update: {},
      create: {
        name: "OJEE 2026",
        slug: "ojee-2026",
        type: "OJEE",
        examDate: new Date("2026-06-20"),
        registrationDeadline: new Date("2026-05-01"),
        description: "Odisha Joint Entrance Examination",
        eligibility: "10+2 with PCM/PCB",
        officialWebsite: "https://ojee.nic.in",
      },
    }),
  ]);
  console.log(`✅ ${exams.length} exams created`);

  // Create enquiries
  const enquiries = await Promise.all(
    [
      { studentName: "Ananya Sharma", phone: "9876543210", email: "ananya@gmail.com", source: "website", status: "PENDING" as const },
      { studentName: "Rahul Mishra", phone: "9876543211", email: "rahul@gmail.com", source: "website", status: "CONTACTED" as const },
      { studentName: "Priya Das", phone: "9876543212", email: "priya@gmail.com", source: "google", status: "PENDING" as const },
      { studentName: "Sourav Kumar", phone: "9876543213", email: "sourav@gmail.com", source: "referral", status: "RESOLVED" as const },
      { studentName: "Sneha Patel", phone: "9876543214", email: "sneha@gmail.com", source: "website", status: "PENDING" as const },
      { studentName: "Amit Singh", phone: "9876543215", email: "amit@gmail.com", source: "facebook", status: "PENDING" as const },
      { studentName: "Kavya Mohanty", phone: "9876543216", email: "kavya@gmail.com", source: "website", status: "CONTACTED" as const },
      { studentName: "Ravi Ranjan", phone: "9876543217", email: "ravi@gmail.com", source: "instagram", status: "PENDING" as const },
    ].map((e) =>
      prisma.enquiry.create({
        data: {
          ...e,
          courseId: courses[Math.floor(Math.random() * courses.length)].id,
          collegeId: colleges[Math.floor(Math.random() * colleges.length)].id,
        },
      })
    )
  );
  console.log(`✅ ${enquiries.length} enquiries created`);

  // Create counsellors
  const counsellors = await Promise.all([
    prisma.counsellor.upsert({
      where: { email: "rajesh@regionalacademy.co.in" },
      update: {},
      create: { name: "Counsellor Rajesh", phone: "9900990001", email: "rajesh@regionalacademy.co.in" },
    }),
    prisma.counsellor.upsert({
      where: { email: "meera@regionalacademy.co.in" },
      update: {},
      create: { name: "Counsellor Meera", phone: "9900990002", email: "meera@regionalacademy.co.in" },
    }),
  ]);
  console.log(`✅ ${counsellors.length} counsellors created`);

  // Create leads
  const leads = await Promise.all(
    [
      { name: "Ananya Sharma", phone: "9876543210", email: "ananya@gmail.com", city: "Bhubaneswar", status: "NEW" as const },
      { name: "Rahul Mishra", phone: "9876543211", email: "rahul@gmail.com", city: "Cuttack", status: "HOT" as const },
      { name: "Priya Das", phone: "9876543212", email: "priya@gmail.com", city: "Puri", status: "FOLLOW_UP" as const },
      { name: "Sourav Kumar", phone: "9876543213", email: "sourav@gmail.com", city: "Rourkela", status: "ENROLLED" as const },
      { name: "Deepak Nayak", phone: "9876543218", email: "deepak@gmail.com", city: "Sambalpur", status: "NEW" as const },
      { name: "Pooja Rath", phone: "9876543219", email: "pooja@gmail.com", city: "Berhampur", status: "HOT" as const },
    ].map((l, i) =>
      prisma.lead.create({
        data: {
          ...l,
          courseId: courses[i % courses.length].id,
          collegeId: colleges[i % colleges.length].id,
          counsellorId: counsellors[i % counsellors.length].id,
        },
      })
    )
  );
  console.log(`✅ ${leads.length} leads created`);

  // Create blogs
  const blogs = await Promise.all([
    prisma.blog.create({
      data: {
        title: "JEE Main 2026 Session 2: Complete Guide",
        slug: "jee-main-2026-session-2-complete-guide",
        content: "JEE Main 2026 Session 2 registration is now live. Here's everything you need to know about the exam dates, syllabus, and preparation tips...",
        excerpt: "Complete guide for JEE Main 2026 Session 2 registration and preparation.",
        published: true,
        authorId: admin.id,
        tags: "JEE,Engineering,Entrance Exam",
      },
    }),
    prisma.blog.create({
      data: {
        title: "Top 10 Engineering Colleges in Odisha 2026",
        slug: "top-10-engineering-colleges-odisha-2026",
        content: "Odisha has emerged as a top destination for engineering education. Here are the top 10 colleges ranked by placements, faculty, and infrastructure...",
        excerpt: "Ranking of the best engineering colleges in Odisha for 2026.",
        published: true,
        authorId: admin.id,
        tags: "Colleges,Engineering,Rankings",
      },
    }),
  ]);
  console.log(`✅ ${blogs.length} blogs created`);

  // Create activity logs
  await Promise.all([
    prisma.activityLog.create({
      data: {
        action: "ENQUIRY_SUBMITTED",
        description: "Ananya Sharma submitted free counselling form - B.Tech (Odisha)",
        entityType: "Enquiry",
        entityId: enquiries[0].id,
      },
    }),
    prisma.activityLog.create({
      data: {
        action: "CALL_LOGGED",
        description: "Counsellor Rajesh logged call - 'Course options shared with Rahul'",
        entityType: "Lead",
        entityId: leads[1].id,
      },
    }),
    prisma.activityLog.create({
      data: {
        action: "COLLEGE_ADDED",
        description: "New college added - Centurion University, Bhubaneswar",
        entityType: "College",
        entityId: colleges[2].id,
      },
    }),
    prisma.activityLog.create({
      data: {
        action: "BLOG_PUBLISHED",
        description: "Blog published - 'JEE Main 2026 Session 2: Complete Guide'",
        entityType: "Blog",
        entityId: blogs[0].id,
      },
    }),
  ]);
  console.log("✅ Activity logs created");

  // Create banners
  await Promise.all([
    prisma.banner.create({
      data: { title: "Admissions Open 2026", imageUrl: "/banners/admissions.jpg", link: "/admissions", isActive: true, order: 1 },
    }),
    prisma.banner.create({
      data: { title: "JEE Main Registration", imageUrl: "/banners/jee.jpg", link: "/exams/jee", isActive: true, order: 2 },
    }),
  ]);
  console.log("✅ Banners created");

  // Create notifications
  await Promise.all([
    prisma.notification.create({ data: { title: "New Enquiry", message: "Ananya Sharma submitted a new enquiry", type: "enquiry" } }),
    prisma.notification.create({ data: { title: "Blog Published", message: "JEE Main 2026 guide has been published", type: "blog" } }),
    prisma.notification.create({ data: { title: "Lead Converted", message: "Sourav Kumar has been enrolled successfully", type: "lead" } }),
  ]);
  console.log("✅ Notifications created");

  console.log("\n🎉 Database seeded successfully!");
  console.log("📧 Admin Login: admin@regionalacademy.co.in");
  console.log("🔑 Password: admin123");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
