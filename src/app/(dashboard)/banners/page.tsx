"use client";

import { motion } from "framer-motion";
import { Plus, GripVertical, Edit, Trash2, Eye, EyeOff } from "lucide-react";

const mockBanners = [
  { id: 1, title: "Admissions Open 2026", order: 1, status: "Active", link: "/admissions" },
  { id: 2, title: "JEE Main Registration", order: 2, status: "Active", link: "/exams/jee" },
  { id: 3, title: "Top Engineering Colleges", order: 3, status: "Inactive", link: "/colleges/engineering" },
];

export default function BannersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Banners</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage homepage slider banners and promotional images</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4" /> Add Banner
        </button>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
        <div className="p-4 bg-slate-100 dark:bg-white/ border-b border-slate-200 dark:border-white/ text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider grid grid-cols-12 gap-4 items-center">
          <div className="col-span-1"></div>
          <div className="col-span-5">Banner Title & Link</div>
          <div className="col-span-2">Order</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-white/5">
          {mockBanners.map((banner) => (
            <div key={banner.id} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-100 dark:bg-white/ transition-colors group">
              <div className="col-span-1 flex items-center justify-center">
                <button className="text-slate-500 hover:text-slate-900 dark:text-white cursor-grab">
                  <GripVertical className="h-5 w-5" />
                </button>
              </div>
              <div className="col-span-5">
                <h3 className="font-medium text-slate-900 dark:text-white">{banner.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{banner.link}</p>
              </div>
              <div className="col-span-2">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/ text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-white/">
                  {banner.order}
                </span>
              </div>
              <div className="col-span-2">
                {banner.status === "Active" ? (
                  <span className="badge badge-enrolled flex items-center gap-1 w-fit">
                    <Eye className="h-3 w-3" /> Active
                  </span>
                ) : (
                  <span className="badge badge-lost flex items-center gap-1 w-fit">
                    <EyeOff className="h-3 w-3" /> Inactive
                  </span>
                )}
              </div>
              <div className="col-span-2 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors rounded-md hover:bg-blue-400/10">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-400 transition-colors rounded-md hover:bg-red-400/10">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
