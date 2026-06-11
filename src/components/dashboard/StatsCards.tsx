"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  {
    title: "Total colleges",
    value: 124,
    subtitle: "3 added this month",
    subtitleColor: "text-emerald-400",
    iconColor: "bg-[#14b8a6]/10 text-[#14b8a6]",
  },
  {
    title: "New enquiries",
    value: 1248,
    subtitle: "18 today",
    subtitleColor: "text-blue-400",
    iconColor: "bg-[#3b82f6]/10 text-[#3b82f6]",
  },
  {
    title: "Active leads",
    value: 342,
    subtitle: "42 pending follow-up",
    subtitleColor: "text-amber-400",
    iconColor: "bg-[#f59e0b]/10 text-[#f59e0b]",
  },
  {
    title: "Conversion rate",
    value: 18.4,
    isPercentage: true,
    subtitle: "2.1% vs last month",
    subtitleColor: "text-purple-400",
    iconColor: "bg-[#7c3aed]/10 text-[#7c3aed]",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="glass-card p-6 cursor-pointer group"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:text-slate-300 transition-colors">{stat.title}</p>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-1 group-hover:text-[#5eead4] transition-colors">
                <AnimatedCounter
                  to={stat.value}
                  formatter={(v) =>
                    stat.isPercentage ? `${v.toFixed(1)}%` : Math.round(v).toLocaleString()
                  }
                />
              </h3>
              <p className={`text-xs font-medium ${stat.subtitleColor}`}>
                {stat.subtitle}
              </p>
            </div>
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 ${stat.iconColor} group-hover:scale-110 hover-gradient-bg`}>
               <div className="h-4 w-4 bg-current rounded-sm opacity-50" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
