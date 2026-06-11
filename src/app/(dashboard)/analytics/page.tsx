"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, LineChart, Activity } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Analytics</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Detailed insights into admissions and platform performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-[#5c6eea]/10 text-[#5c6eea] flex items-center justify-center mb-4"><BarChart3 className="h-6 w-6" /></div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">2,845</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Total Visitors This Month</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-4"><Activity className="h-6 w-6" /></div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">12.5%</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Lead Conversion Rate</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center mb-4"><PieChart className="h-6 w-6" /></div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">B.Tech</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Top Performing Course</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-[#f43f5e]/10 text-[#f43f5e] flex items-center justify-center mb-4"><LineChart className="h-6 w-6" /></div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">45%</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Organic Search Traffic</p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-slate-500 mb-4">
            <BarChart3 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Detailed Charts Coming Soon</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">More detailed analytics charts and reports will be implemented in the next phase.</p>
        </div>
      </motion.div>
    </div>
  );
}
