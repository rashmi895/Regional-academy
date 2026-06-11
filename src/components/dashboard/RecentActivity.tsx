"use client";

import { motion } from "framer-motion";

const activities = [
  { text: "Ananya Sharma submitted free counselling form - B.Tech (Odisha)", time: "2 min ago", color: "bg-emerald-400" },
  { text: "Counsellor Rajesh logged call - 'Course options shared with Rahul'", time: "18 min ago", color: "bg-blue-400" },
  { text: "New college added - Centurion University, Bhubaneswar", time: "1 hr ago", color: "bg-amber-400" },
  { text: "Blog published - 'JEE Main 2026 Session 2: Complete Guide'", time: "3 hrs ago", color: "bg-purple-400" },
];

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent activity</h3>
      <div className="relative space-y-6 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className={`flex items-center justify-center w-6 h-6 rounded-full border-[3px] border-[var(--bg-primary)] ${activity.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
            </div>
            
            {/* Content */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl glass-card transition-all cursor-pointer group-hover:border-[#5c6eea]/40"
            >
              <div className="flex items-center justify-between mb-1">
                <time className="text-xs font-medium text-[#5c6eea]">{activity.time}</time>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">{activity.text}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
