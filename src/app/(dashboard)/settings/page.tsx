"use client";

import { motion } from "framer-motion";
import { User, Lock, Bell, Moon, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your account and system preferences</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 border-r border-slate-200 dark:border-white/ p-6 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#5c6eea]/10 text-[#5c6eea] font-medium text-sm transition-colors">
              <User className="h-4 w-4" /> Profile Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/ font-medium text-sm transition-colors">
              <Lock className="h-4 w-4" /> Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/ font-medium text-sm transition-colors">
              <Bell className="h-4 w-4" /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/ font-medium text-sm transition-colors">
              <Moon className="h-4 w-4" /> Appearance
            </button>
          </div>
          
          <div className="flex-1 p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Profile Settings</h2>
            
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-white/">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#5c6eea] to-[#7c3aed] flex items-center justify-center text-3xl font-bold text-slate-900 dark:text-white shadow-lg">
                AD
              </div>
              <div>
                <button className="btn-ghost mb-2">Upload new photo</button>
                <p className="text-xs text-slate-500">At least 800x800 px recommended. JPG or PNG is allowed.</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">First Name</label>
                  <input type="text" className="input-dark" defaultValue="Admin" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="input-dark" defaultValue="User" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Email Address</label>
                <input type="email" className="input-dark" defaultValue="admin@regionalacademy.co.in" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Role</label>
                <input type="text" className="input-dark opacity-50 cursor-not-allowed" defaultValue="Super Admin" disabled />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" className="btn-ghost">Cancel</button>
                <button type="button" className="btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
