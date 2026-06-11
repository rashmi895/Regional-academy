"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { LogIn, LogOut, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AuthButtons() {
  const { data: session, status } = useSession();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();

  if (status === "loading") {
    return <div className="h-9 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />;
  }

  return (
    <>
      {session ? (
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-500/10 dark:hover:text-red-400 dark:hover:border-red-500/20"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 rounded-full bg-[#5c6eea] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#5c6eea]/20 transition-all hover:scale-105 hover:bg-[#4f46e5]"
        >
          <LogIn className="h-4 w-4" />
          Login
        </button>
      )}

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogoutModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-50 w-full max-w-md rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Confirm Logout</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Are you sure you want to log out of your session? You will need to sign in again to access the dashboard.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-red-600/40"
                >
                  Yes, Log out
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
