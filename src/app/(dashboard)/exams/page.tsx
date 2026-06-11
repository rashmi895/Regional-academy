"use client";

import { motion } from "framer-motion";
import { Plus, Search, Calendar, Clock, Edit, Trash2 } from "lucide-react";

const mockExams = [
  { id: 1, name: "JEE Main 2026", type: "JEE", date: "Apr 15, 2026", deadline: "Mar 01, 2026", status: "Upcoming" },
  { id: 2, name: "NEET 2026", type: "NEET", date: "May 05, 2026", deadline: "Mar 15, 2026", status: "Upcoming" },
  { id: 3, name: "OJEE 2026", type: "OJEE", date: "Jun 20, 2026", deadline: "May 01, 2026", status: "Upcoming" },
];

export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Exams</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage entrance exam dates and deadlines</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-4 w-4" /> Add Exam
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockExams.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="badge badge-hot mb-2">{exam.type}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exam.name}</h3>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors rounded-md hover:bg-blue-400/10">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-400 transition-colors rounded-md hover:bg-red-400/10">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Calendar className="h-4 w-4 text-[#5c6eea]" />
                <span className="text-slate-500 dark:text-slate-400 w-24">Exam Date:</span>
                <span className="font-medium text-slate-900 dark:text-white">{exam.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Clock className="h-4 w-4 text-[#f43f5e]" />
                <span className="text-slate-500 dark:text-slate-400 w-24">Deadline:</span>
                <span className="font-medium text-slate-900 dark:text-white">{exam.deadline}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
