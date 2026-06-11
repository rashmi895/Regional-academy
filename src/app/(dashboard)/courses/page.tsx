"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";

const mockCourses = [
  { id: 1, name: "B.Tech Computer Science", level: "UG", duration: "4 Years", college: "KIIT University", status: "Active" },
  { id: 2, name: "MBA", level: "PG", duration: "2 Years", college: "KIIT University", status: "Active" },
  { id: 3, name: "MBBS", level: "UG", duration: "5.5 Years", college: "SOA University", status: "Active" },
  { id: 4, name: "BBA", level: "UG", duration: "3 Years", college: "Centurion University", status: "Active" },
  { id: 5, name: "BCA", level: "UG", duration: "3 Years", college: "Birla Global University", status: "Active" },
];

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Courses</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage academic programs across all colleges</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4" /> Add Course
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <div className="p-4 border-b border-slate-200 dark:border-white/ flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="input-dark pl-10 h-10 w-full"
            />
          </div>
          <div className="flex gap-2">
            <button className="btn-ghost flex items-center gap-2 h-10">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Level</th>
                <th>Duration</th>
                <th>College</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCourses.map((course) => (
                <tr key={course.id}>
                  <td className="font-medium text-slate-900 dark:text-white">{course.name}</td>
                  <td>
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-white/ text-slate-600 dark:text-slate-300 text-xs font-medium">
                      {course.level}
                    </span>
                  </td>
                  <td>{course.duration}</td>
                  <td className="text-slate-500 dark:text-slate-400">{course.college}</td>
                  <td>
                    <span className="badge badge-enrolled">{course.status}</span>
                  </td>
                  <td className="text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors rounded-md hover:bg-blue-400/10">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-400 transition-colors rounded-md hover:bg-red-400/10">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
