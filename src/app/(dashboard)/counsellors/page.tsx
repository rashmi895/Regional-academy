"use client";

import { motion } from "framer-motion";
import { Plus, Search, MoreVertical, Edit, Trash2, Mail, Phone, Users } from "lucide-react";

import Link from "next/link";

const mockCounsellors = [
  { id: 1, name: "Rajesh Kumar", phone: "9900990001", email: "rajesh@regionalacademy.co.in", leads: 45, status: "Active" },
  { id: 2, name: "Meera Singh", phone: "9900990002", email: "meera@regionalacademy.co.in", leads: 38, status: "Active" },
];

export default function CounsellorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Counsellors</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage admission counsellors and their assigned leads</p>
        </div>
        <Link href="/counsellors/new" className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Counsellor
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCounsellors.map((counsellor, index) => (
          <motion.div
            key={counsellor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center text-slate-900 dark:text-white font-bold text-lg shadow-lg">
                  {counsellor.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{counsellor.name}</h3>
                  <span className="badge badge-enrolled mt-1">{counsellor.status}</span>
                </div>
              </div>
              <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors rounded-md hover:bg-slate-100 dark:bg-white/">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>{counsellor.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>{counsellor.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-white/">
                <Users className="h-4 w-4 text-[#5c6eea]" />
                <span className="font-medium text-slate-900 dark:text-white">{counsellor.leads} assigned leads</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button className="flex-1 btn-ghost h-9 text-xs">Edit</button>
              <button className="flex-1 btn-ghost h-9 text-xs">View Leads</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
