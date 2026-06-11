"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-2.5 text-slate-500 dark:text-slate-400 transition-all hover:bg-slate-200 dark:hover:bg-slate-100 dark:bg-white/ hover:text-slate-900 dark:hover:text-slate-900 dark:text-white cursor-pointer group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 group-hover:text-yellow-400 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
      )}
    </motion.button>
  );
}
