import { createCounsellor } from "@/app/actions/counsellor";
import { User, Phone, Mail, Activity } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "./SubmitButton";

export default function AddCounsellorPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Add New Counsellor</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Register a new admission counsellor</p>
        </div>
        <Link href="/counsellors" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors">
          ← Back to Counsellors
        </Link>
      </div>

      <div className="glass-card p-8">
        <form action={createCounsellor} className="space-y-8">
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Counsellor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <User className="h-4 w-4 text-[#5c6eea]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Meera Singh"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#10b981]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="e.g. 9900990001"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#f59e0b]" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. meera@regionalacademy.co.in"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="isActive" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[#14b8a6]" />
                  Account Status *
                </label>
                <select
                  id="isActive"
                  name="isActive"
                  required
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6] transition-all appearance-none"
                >
                  <option value="true">Active (Can be assigned leads)</option>
                  <option value="false">Inactive</option>
                </select>
              </div>

            </div>
          </div>

          <div className="pt-6 flex justify-end gap-4 border-t border-slate-200 dark:border-white/10">
            <Link href="/counsellors" className="px-6 py-3 rounded-xl font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
