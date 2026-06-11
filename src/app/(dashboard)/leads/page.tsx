"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, Phone, Mail, MoreHorizontal } from "lucide-react";

const mockLeads = [
  { id: 1, name: "Ananya Sharma", phone: "9876543210", email: "ananya@gmail.com", course: "B.Tech", city: "Bhubaneswar", status: "New", assignee: "Rajesh" },
  { id: 2, name: "Rahul Mishra", phone: "9876543211", email: "rahul@gmail.com", course: "MBA", city: "Cuttack", status: "Hot", assignee: "Meera" },
  { id: 3, name: "Priya Das", phone: "9876543212", email: "priya@gmail.com", course: "MBBS", city: "Puri", status: "Follow-up", assignee: "Rajesh" },
  { id: 4, name: "Sourav Kumar", phone: "9876543213", email: "sourav@gmail.com", course: "BBA", city: "Rourkela", status: "Enrolled", assignee: "Meera" },
  { id: 5, name: "Deepak Nayak", phone: "9876543218", email: "deepak@gmail.com", course: "BCA", city: "Sambalpur", status: "Lost", assignee: "Rajesh" },
];

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Lead Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track and manage student admissions pipeline</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4" /> Add Lead
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
      >
        <div className="p-4 border-b border-slate-200 dark:border-white/ flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search leads..."
              className="input-dark pl-10 h-10 w-full"
            />
          </div>
          <div className="flex gap-2">
            <select className="input-dark h-10 py-0 w-32 cursor-pointer">
              <option value="">Status: All</option>
              <option value="new">New</option>
              <option value="hot">Hot</option>
              <option value="followup">Follow-up</option>
            </select>
            <select className="input-dark h-10 py-0 w-36 cursor-pointer hidden md:block">
              <option value="">Assignee: All</option>
              <option value="rajesh">Rajesh</option>
              <option value="meera">Meera</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Lead Info</th>
                <th>Course & City</th>
                <th>Contact</th>
                <th>Assignee</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockLeads.map((lead) => (
                <tr key={lead.id}>
                  <td className="font-medium text-slate-900 dark:text-white">{lead.name}</td>
                  <td>
                    <div className="text-slate-900 dark:text-white">{lead.course}</div>
                    <div className="text-xs text-slate-500">{lead.city}</div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Phone className="h-3 w-3" /> {lead.phone}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <Mail className="h-3 w-3" /> {lead.email}
                    </div>
                  </td>
                  <td>{lead.assignee}</td>
                  <td>
                    <span className={`badge ${
                      lead.status === 'New' ? 'badge-new' :
                      lead.status === 'Hot' ? 'badge-hot' :
                      lead.status === 'Follow-up' ? 'badge-follow-up' :
                      lead.status === 'Enrolled' ? 'badge-enrolled' :
                      'badge-lost'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors rounded-md hover:bg-slate-100 dark:bg-white/">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
