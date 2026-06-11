"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  CalendarDays,
  FileText,
  MessageSquare,
  Users,
  UserCheck,
  BarChart3,
  Bell,
  Image as ImageIcon,
  Settings,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";

type NavItem = {
  name: string;
  href: string;
  icon: any;
  badge?: string;
  badgeColor?: "amber" | "primary" | string;
};

type NavGroup = {
  group: string;
  items: NavItem[];
};

const navItems: NavGroup[] = [
  {
    group: "CONTENT",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Colleges", href: "/colleges", icon: GraduationCap, badge: "124" },
      { name: "Courses", href: "/courses", icon: BookOpen },
      { name: "Exams", href: "/exams", icon: CalendarDays },
      { name: "Blogs", href: "/blogs", icon: FileText },
    ],
  },
  {
    group: "CRM",
    items: [
      { name: "Enquiries", href: "/enquiries", icon: MessageSquare, badge: "18", badgeColor: "amber" },
      { name: "Lead Management", href: "/leads", icon: Users },
      { name: "Counsellors", href: "/counsellors", icon: UserCheck },
    ],
  },
  {
    group: "SYSTEM",
    items: [
      { name: "Analytics", href: "/analytics", icon: BarChart3 },
      { name: "Notifications", href: "/notifications", icon: Bell },
      { name: "Banners", href: "/banners", icon: ImageIcon },
      { name: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[var(--sidebar-width)] border-r border-slate-200 dark:border-white/5 bg-[var(--bg-sidebar)] flex flex-col transition-all duration-300">
      {/* Logo */}
      <div className="flex h-[var(--header-height)] items-center px-6 border-b border-slate-200 dark:border-white/5">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5c6eea] to-[#7c3aed] text-slate-900 dark:text-white font-bold text-lg shadow-[0_0_15px_rgba(92,110,234,0.3)] group-hover:shadow-[0_0_20px_rgba(92,110,234,0.5)] transition-all">
            RA
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
              Regional Academy
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Admin Panel
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 scrollbar-hide">
        <nav className="space-y-8">
          {navItems.map((group, groupIdx) => (
            <div key={group.group}>
              <h3 className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                {group.group}
              </h3>
              <ul className="space-y-1">
                {group.items.map((item, itemIdx) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: (groupIdx * 0.1) + (itemIdx * 0.05),
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                          }}
                          className={`relative flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group ${
                            isActive
                              ? "text-slate-900 dark:text-white bg-gradient-to-r from-[rgba(92,110,234,0.05)] dark:from-[rgba(92,110,234,0.15)] to-transparent"
                              : "text-slate-500 dark:text-slate-400 hover-text-glow hover:bg-slate-100 dark:hover:bg-slate-100 dark:bg-white/"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="sidebar-active"
                              className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-gradient-to-b from-[#5c6eea] to-[#7c3aed]"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          <div className="flex items-center gap-3">
                            <item.icon
                              className={`h-5 w-5 transition-colors ${
                                isActive ? "text-[#5c6eea]" : "text-slate-500 group-hover:text-slate-600 dark:text-slate-300"
                              }`}
                            />
                            {item.name}
                          </div>
                          {item.badge && (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                                item.badgeColor === "amber"
                                  ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                  : "bg-[#5c6eea]/10 text-[#5c6eea] border border-[#5c6eea]/20"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </motion.div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200 dark:border-white/5">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-400 transition-all group"
        >
          <LogOut className="h-5 w-5 text-slate-500 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
          Logout
        </button>
      </div>
    </aside>
  );
}
