"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { deleteCollege } from "@/app/actions/college";
import { useState, useTransition } from "react";
import { College } from "@prisma/client";

type CollegeWithCount = College & {
  _count: {
    courses: number;
  }
};

export default function CollegesClient({ initialColleges }: { initialColleges: CollegeWithCount[] }) {
  const [colleges, setColleges] = useState(initialColleges);
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this college?")) {
      startTransition(async () => {
        await deleteCollege(id);
        // Optimistically remove from UI
        setColleges(colleges.filter(c => c.id !== id));
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Colleges</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage all affiliated colleges and institutions</p>
        </div>
        <Link href="/colleges/new">
          <button className="btn-primary">
            <Plus className="h-4 w-4" /> Add College
          </button>
        </Link>
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
              placeholder="Search colleges..."
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
                <th>College Name</th>
                <th>Location</th>
                <th>Type</th>
                <th>Courses</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {colleges.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-500 dark:text-slate-400">
                    No colleges found. Add one to get started.
                  </td>
                </tr>
              ) : (
                colleges.map((college) => (
                  <tr key={college.id} className={isPending ? "opacity-70" : ""}>
                    <td className="font-medium text-slate-900 dark:text-white">
                      <div className="flex items-center gap-3">
                        {college.logo ? (
                          <img src={college.logo} alt={college.name} className="h-8 w-8 rounded-lg object-cover bg-slate-100 dark:bg-white/" />
                        ) : (
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#5c6eea]/20 to-[#7c3aed]/20 flex items-center justify-center text-[#5c6eea] font-bold text-xs">
                            {college.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        {college.name}
                      </div>
                    </td>
                    <td>{college.city}</td>
                    <td>
                      <span className="px-2 py-1 rounded bg-slate-100 dark:bg-white/ text-slate-600 dark:text-slate-300 text-xs font-medium">
                        {college.type}
                      </span>
                    </td>
                    <td>{college._count.courses}</td>
                    <td>
                      <span className={`badge ${college.isActive ? "badge-enrolled" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                        {college.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors rounded-md hover:bg-blue-400/10">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(college.id)}
                          disabled={isPending}
                          className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-400 transition-colors rounded-md hover:bg-red-400/10 disabled:opacity-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors rounded-md hover:bg-slate-100 dark:bg-white/">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-white/ flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <div>Showing {colleges.length} results</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded-md border border-slate-200 dark:border-white/ hover:bg-slate-100 dark:bg-white/ disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded-md bg-[#5c6eea] text-slate-900 dark:text-white">1</button>
            <button className="px-3 py-1 rounded-md border border-slate-200 dark:border-white/ hover:bg-slate-100 dark:bg-white/">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
