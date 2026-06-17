import { updateCourse } from "@/app/actions/course";
import { BookOpen, GraduationCap, MapPin, Hash, Link as LinkIcon, Save, Calendar, IndianRupee, FileText } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { SubmitButton } from "../../new/SubmitButton";
import { notFound } from "next/navigation";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await prisma.course.findUnique({
    where: { id }
  });

  if (!course) {
    notFound();
  }

  // Pre-bind the course ID to the update action
  const updateCourseWithId = updateCourse.bind(null, course.id);

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Edit Course</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Update the details for {course.name}</p>
        </div>
        <Link href="/courses" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors">
          ← Back to Courses
        </Link>
      </div>

      <div className="glass-card p-8">
        <form action={updateCourseWithId} className="space-y-8">
          
          {/* Basic Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#5c6eea]" />
                  Course Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={course.name}
                  placeholder="e.g. B.Tech Computer Science"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="level" className="text-sm font-medium text-slate-600 dark:text-slate-300">Course Level *</label>
                <select
                  id="level"
                  name="level"
                  required
                  defaultValue={course.level}
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="UG">Undergraduate (UG)</option>
                  <option value="PG">Postgraduate (PG)</option>
                  <option value="DIPLOMA">Diploma</option>
                  <option value="CERTIFICATE">Certificate</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-slate-600 dark:text-slate-300">Category *</label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue={course.category}
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="PAN_INDIA">Pan India</option>
                  <option value="ODISHA">Odisha</option>
                  <option value="INTERNATIONAL">International</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="collegeName" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[#f59e0b]" />
                  Associated College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  defaultValue={course.collegeName || ""}
                  placeholder="e.g. KIIT University"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Course Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label htmlFor="duration" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#10b981]" />
                  Duration *
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  required
                  defaultValue={course.duration}
                  placeholder="e.g. 4 Years"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="fees" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-[#ef4444]" />
                  Fees
                </label>
                <input
                  type="text"
                  id="fees"
                  name="fees"
                  defaultValue={course.fees || ""}
                  placeholder="e.g. ₹4-12 Lakhs"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] transition-all"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="eligibility" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#3b82f6]" />
                  Eligibility Criteria
                </label>
                <input
                  type="text"
                  id="eligibility"
                  name="eligibility"
                  defaultValue={course.eligibility || ""}
                  placeholder="e.g. 10+2 with PCM, JEE Main"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Status & Description</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="isActive" className="text-sm font-medium text-slate-600 dark:text-slate-300">Status *</label>
                <select
                  id="isActive"
                  name="isActive"
                  required
                  defaultValue={course.isActive ? "true" : "false"}
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="true">Active (Visible)</option>
                  <option value="false">Inactive (Hidden)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-600 dark:text-slate-300">Detailed Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  defaultValue={course.description || ""}
                  placeholder="Write a comprehensive description about the course structure, syllabus, and career opportunities..."
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all resize-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-end gap-4 border-t border-slate-200 dark:border-white/10">
            <Link href="/courses" className="px-6 py-3 rounded-xl font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
