"use client";

import { Bell, Search, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { AuthButtons } from "./AuthButtons";

export function Header() {
  const pathname = usePathname();
  
  // Format pathname to title
  const title = pathname === "/dashboard" 
    ? "Dashboard" 
    : pathname.split("/")[1]?.charAt(0).toUpperCase() + pathname.split("/")[1]?.slice(1) || "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex h-[var(--header-height)] w-full items-center justify-between border-b border-slate-200 dark:border-white/5 bg-[var(--bg-header)] px-8 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            key={title}
            className="text-xl font-bold text-slate-900 dark:text-white tracking-wide"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="overflow-hidden whitespace-nowrap mt-0.5"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Welcome back - here's today's overview <span className="inline-block animate-pulse-glow w-1.5 h-3 bg-[#5c6eea] ml-1 align-middle"></span>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group hidden md:block"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 dark:text-slate-400 group-focus-within:text-[#5eead4] transition-colors" />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-[#5c6eea]/50 focus:bg-slate-200 dark:focus:bg-white/10 transition-all duration-300 w-64 focus:w-80"
          />
        </motion.div>

        <Link href="/colleges/new">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10b981] to-[#059669] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)]">
            <Plus className="h-4 w-4" />
            Add College
          </button>
        </Link>

        <AuthButtons />
        <ThemeToggle />

        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-2.5 text-slate-500 dark:text-slate-400 transition-all hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white cursor-pointer group"
        >
          <Bell className="h-5 w-5 group-hover:animate-[swing_1s_ease-in-out_infinite]" />
          <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          </span>
        </motion.div>
      </div>
    </header>
  );
}
