"use client";

import { motion } from "framer-motion";
import { Search, Filter, Eye, CheckCircle2 } from "lucide-react";

const mockEnquiries = [
  { id: 1, name: "Ananya Sharma", course: "B.Tech", date: "Today, 10:45 AM", source: "Website", status: "Pending" },
  { id: 2, name: "Rahul Mishra", course: "MBA", date: "Today, 09:15 AM", source: "Google Ads", status: "Contacted" },
  { id: 3, name: "Priya Das", course: "MBBS", date: "Yesterday, 04:30 PM", source: "Facebook", status: "Pending" },
  { id: 4, name: "Sourav Kumar", course: "BBA", date: "Yesterday, 11:20 AM", source: "Referral", status: "Resolved" },
  { id: 5, name: "Sneha Patel", course: "BCA", date: "Jun 02, 2026", source: "Website", status: "Closed" },
];

export default function EnquiriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Student Enquiries</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage incoming queries and counselling requests</p>
        </div>
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
              placeholder="Search enquiries by name or email..."
              className="input-dark pl-10 h-10 w-full"
            />
          </div>
          <div className="flex gap-2">
            <select className="input-dark h-10 py-0 w-32 cursor-pointer">
              <option value="">Status: All</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="resolved">Resolved</option>
            </select>
            <button className="btn-ghost flex items-center gap-2 h-10">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course Interest</th>
                <th>Date</th>
                <th>Source</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockEnquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td className="font-medium text-slate-900 dark:text-white">{enquiry.name}</td>
                  <td>{enquiry.course}</td>
                  <td>{enquiry.date}</td>
                  <td>{enquiry.source}</td>
                  <td>
                    <span className={`badge ${
                      enquiry.status === 'Pending' ? 'badge-new' :
                      enquiry.status === 'Contacted' ? 'badge-follow-up' :
                      enquiry.status === 'Resolved' ? 'badge-enrolled' :
                      'badge-lost'
                    }`}>
                      {enquiry.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors rounded-md hover:bg-blue-400/10" title="View Details">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors rounded-md hover:bg-emerald-400/10" title="Mark Resolved">
                        <CheckCircle2 className="h-4 w-4" />
                      </button>
                    </div>
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
