"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, Edit, Trash2, Globe, EyeOff } from "lucide-react";

import Link from "next/link";

const mockBlogs = [
  { id: 1, title: "JEE Main 2026 Session 2: Complete Guide", author: "Admin", date: "Jun 04, 2026", status: "Published", views: "1.2k" },
  { id: 2, title: "Top 10 Engineering Colleges in Odisha 2026", author: "Admin", date: "May 28, 2026", status: "Published", views: "3.4k" },
  { id: 3, title: "How to Prepare for NEET in 6 Months", author: "Admin", date: "May 15, 2026", status: "Draft", views: "-" },
];

export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Blogs</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage articles, news, and SEO content</p>
        </div>
        <Link href="/blogs/new" className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Blog
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
              placeholder="Search blogs..."
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
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Views</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="font-medium text-slate-900 dark:text-white max-w-xs truncate">{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{blog.date}</td>
                  <td>{blog.views}</td>
                  <td>
                    {blog.status === "Published" ? (
                      <span className="badge badge-enrolled flex items-center gap-1 w-fit">
                        <Globe className="h-3 w-3" /> Published
                      </span>
                    ) : (
                      <span className="badge badge-pending flex items-center gap-1 w-fit">
                        <EyeOff className="h-3 w-3" /> Draft
                      </span>
                    )}
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
