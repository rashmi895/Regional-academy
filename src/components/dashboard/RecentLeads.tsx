"use client";

import { motion } from "framer-motion";
import { getInitials } from "@/lib/utils";

const leads = [
  { name: "Ananya Sharma", course: "B.Tech", city: "Bhubaneswar", status: "New", statusClass: "badge-new" },
  { name: "Rahul Mishra", course: "MBA", city: "Cuttack", status: "Hot", statusClass: "badge-hot" },
  { name: "Priya Das", course: "MBBS", city: "Puri", status: "Follow-up", statusClass: "badge-follow-up" },
  { name: "Sourav Kumar", course: "BBA", city: "Rourkela", status: "Enrolled", statusClass: "badge-enrolled" },
];

export function RecentLeads() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-6 col-span-1"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent leads</h3>
        <button className="text-sm font-medium text-[#10b981] hover:text-[#059669] transition-colors">
          All leads →
        </button>
      </div>
      <div className="space-y-4">
        {leads.map((lead, index) => (
          <motion.div
            key={lead.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#5c6eea] to-[#7c3aed] flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white shadow-lg">
                {getInitials(lead.name)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#5c6eea] transition-colors">
                  {lead.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lead.course} · {lead.city}
                </p>
              </div>
            </div>
            <span className={`badge ${lead.statusClass}`}>{lead.status}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
