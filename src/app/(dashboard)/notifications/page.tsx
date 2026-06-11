"use client";

import { motion } from "framer-motion";
import { Bell, Check, Trash2, Mail, Info, AlertCircle } from "lucide-react";

const mockNotifications = [
  { id: 1, title: "New Enquiry Received", message: "Ananya Sharma submitted a free counselling form for B.Tech.", time: "10 mins ago", type: "info", isRead: false },
  { id: 2, title: "Lead Status Updated", message: "Rahul Mishra's lead status was updated to 'Hot' by Meera.", time: "2 hours ago", type: "success", isRead: false },
  { id: 3, title: "System Maintenance", message: "Scheduled maintenance will occur tonight at 2 AM.", time: "1 day ago", type: "warning", isRead: true },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Notifications</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage system alerts and updates</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost">Mark all as read</button>
        </div>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card p-4 sm:p-6 flex items-start gap-4 transition-all ${
              !notification.isRead ? "border-[#5c6eea]/30 shadow-[0_0_15px_rgba(92,110,234,0.1)]" : "opacity-75"
            }`}
          >
            <div className={`mt-1 h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${
              notification.type === "info" ? "bg-[#3b82f6]/10 text-[#3b82f6]" :
              notification.type === "success" ? "bg-[#10b981]/10 text-[#10b981]" :
              "bg-[#f59e0b]/10 text-[#f59e0b]"
            }`}>
              {notification.type === "info" ? <Mail className="h-5 w-5" /> :
               notification.type === "success" ? <Check className="h-5 w-5" /> :
               <AlertCircle className="h-5 w-5" />}
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                <h3 className={`text-base font-bold ${!notification.isRead ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"}`}>
                  {notification.title}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{notification.time}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{notification.message}</p>
            </div>
            
            <div className="flex gap-2 ml-4">
              {!notification.isRead && (
                <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-[#5c6eea] transition-colors rounded-md hover:bg-[#5c6eea]/10" title="Mark as read">
                  <Check className="h-4 w-4" />
                </button>
              )}
              <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-400 transition-colors rounded-md hover:bg-red-400/10" title="Delete">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
