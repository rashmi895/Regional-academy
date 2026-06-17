import { createLead } from "@/app/actions/lead";
import { User, Phone, Mail, MapPin, BookOpen, GraduationCap, Users, Activity, FileText } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { SubmitButton } from "./SubmitButton";

export const dynamic = "force-dynamic";

export default async function AddLeadPage() {
  // Fetch dropdown options concurrently
  const [colleges, courses, counsellors] = await Promise.all([
    prisma.college.findMany({ select: { id: true, name: true, location: true }, orderBy: { name: "asc" } }),
    prisma.course.findMany({ select: { id: true, name: true, level: true }, orderBy: { name: "asc" } }),
    prisma.counsellor.findMany({ select: { id: true, name: true }, where: { isActive: true }, orderBy: { name: "asc" } })
  ]);

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Add New Lead</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Register a new student inquiry into the pipeline</p>
        </div>
        <Link href="/leads" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors">
          ← Back to Leads
        </Link>
      </div>

      <div className="glass-card p-8">
        <form action={createLead} className="space-y-8">
          
          {/* Student Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <User className="h-4 w-4 text-[#5c6eea]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Rahul Mishra"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#10b981]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="e.g. 9876543210"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#f59e0b]" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. rahul@example.com"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="city" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ef4444]" />
                  City/Location
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="e.g. Bhubaneswar"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Academic Interest Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Academic Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label htmlFor="collegeId" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[#8b5cf6]" />
                  Target College
                </label>
                <select
                  id="collegeId"
                  name="collegeId"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all appearance-none"
                >
                  <option value="">-- Select a College --</option>
                  {colleges.map(college => (
                    <option key={college.id} value={college.id}>{college.name} ({college.location})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="courseId" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#06b6d4]" />
                  Interested Course
                </label>
                <select
                  id="courseId"
                  name="courseId"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all appearance-none"
                >
                  <option value="">-- Select a Course --</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name} ({course.level})</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Lead Management Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Management Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="counsellorId" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#f43f5e]" />
                  Assigned Counsellor
                </label>
                <select
                  id="counsellorId"
                  name="counsellorId"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e] transition-all appearance-none"
                >
                  <option value="">-- Unassigned --</option>
                  {counsellors.map(counsellor => (
                    <option key={counsellor.id} value={counsellor.id}>{counsellor.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[#14b8a6]" />
                  Lead Status *
                </label>
                <select
                  id="status"
                  name="status"
                  required
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6] transition-all appearance-none"
                >
                  <option value="NEW">New</option>
                  <option value="HOT">Hot</option>
                  <option value="FOLLOW_UP">Follow Up</option>
                  <option value="ENROLLED">Enrolled</option>
                  <option value="LOST">Lost</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#8b5cf6]" />
                Internal Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Any special requests, follow-up times, or details about the student's background..."
                className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all resize-none"
              />
            </div>
          </div>

          <div className="pt-6 flex justify-end gap-4 border-t border-slate-200 dark:border-white/10">
            <Link href="/leads" className="px-6 py-3 rounded-xl font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
