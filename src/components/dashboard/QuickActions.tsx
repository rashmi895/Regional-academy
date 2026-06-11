"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CalendarDays, Users, MessageSquare, FileText } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "Colleges",
    description: "Add, edit, filter by region",
    linkText: "+ Add college",
    href: "/colleges/new",
    icon: GraduationCap,
    color: "text-emerald-400",
    bgColor: "bg-[#10b981]/10",
  },
  {
    title: "Courses",
    description: "UG / PG / Diploma tracks",
    linkText: "+ Add course",
    href: "/courses/new",
    icon: BookOpen,
    color: "text-blue-400",
    bgColor: "bg-[#3b82f6]/10",
  },
  {
    title: "Exams",
    description: "JEE, NEET, OJEE dates & results",
    linkText: "Manage exams",
    href: "/exams",
    icon: CalendarDays,
    color: "text-amber-400",
    bgColor: "bg-[#f59e0b]/10",
  },
  {
    title: "Lead Management",
    description: "Assign, follow up, track timeline",
    linkText: "View leads",
    href: "/leads",
    icon: Users,
    color: "text-rose-400",
    bgColor: "bg-[#f43f5e]/10",
  },
  {
    title: "Student Enquiries",
    description: "View all form submissions",
    linkText: "View enquiries",
    href: "/enquiries",
    icon: MessageSquare,
    color: "text-purple-400",
    bgColor: "bg-[#7c3aed]/10",
  },
  {
    title: "Blogs",
    description: "Publish articles, SEO content",
    linkText: "+ Add blog",
    href: "/blogs/new",
    icon: FileText,
    color: "text-pink-400",
    bgColor: "bg-[#ec4899]/10",
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {actions.map((action, index) => (
        <motion.div
          key={action.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          whileTap={{ scale: 0.96 }}
          className="glass-card p-6 flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${action.bgColor} ${action.color} group-hover:scale-110 hover-gradient-bg`}>
              <action.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#5eead4] transition-colors">
              {action.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 group-hover:text-slate-600 dark:text-slate-300 transition-colors">{action.description}</p>
          </div>
          <Link href={action.href} className={`text-sm font-semibold ${action.color} group-hover:text-[#7c3aed] transition-colors`}>
            {action.linkText}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
