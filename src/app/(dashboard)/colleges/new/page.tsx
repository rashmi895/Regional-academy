"use client";

import { motion } from "framer-motion";
import { createCollege } from "@/app/actions/college";
import { Building, MapPin, Globe, Mail, Phone, Hash, Link as LinkIcon, Save, Image as ImageIcon } from "lucide-react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useRef } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn-primary flex items-center gap-2 px-6 py-3 ${pending ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {pending ? (
        <div className="h-4 w-4 border-2 border-slate-200 dark:border-white/ border-t-white rounded-full animate-spin" />
      ) : (
        <Save className="h-4 w-4" />
      )}
      {pending ? "Saving College..." : "Save College Profile"}
    </button>
  );
}

export default function AddCollegePage() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pb-12"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Add New College</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Create a new institutional profile in the database</p>
        </div>
        <Link href="/dashboard" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="glass-card p-8">
        <form ref={formRef} action={createCollege} className="space-y-8">
          
          {/* Basic Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/ pb-2">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="category" className="text-sm font-medium text-slate-600 dark:text-slate-300">College Category *</label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="PAN_INDIA">Pan India</option>
                  <option value="ODISHA">Odisha</option>
                  <option value="INTERNATIONAL">International</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Building className="h-4 w-4 text-[#5c6eea]" />
                  College Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Kalinga Institute of Industrial Technology"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-slate-600 dark:text-slate-300">Institution Type *</label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="PRIVATE">Private</option>
                  <option value="GOVERNMENT">Government</option>
                  <option value="DEEMED">Deemed University</option>
                  <option value="AUTONOMOUS">Autonomous</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="logo" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-[#10b981]" />
                  Logo Image (Upload)
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#10b981]/20 file:text-[#10b981] hover:file:bg-[#10b981]/30 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="ranking" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Hash className="h-4 w-4 text-[#f59e0b]" />
                  NIRF Ranking (Optional)
                </label>
                <input
                  type="number"
                  id="ranking"
                  name="ranking"
                  placeholder="e.g. 42"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/ pb-2">Location Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="location" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ef4444]" />
                  Full Address *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="e.g. Patia, Bhubaneswar, Odisha 751024"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-slate-600 dark:text-slate-300">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="e.g. Bhubaneswar"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="state" className="text-sm font-medium text-slate-600 dark:text-slate-300">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  defaultValue="Odisha"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/ pb-2">Contact & Web</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#3b82f6]" />
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://kiit.ac.in"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#3b82f6]" />
                  Official Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="admission@college.edu.in"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#3b82f6]" />
                  Contact Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/ pb-2">About Institution</h3>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-slate-600 dark:text-slate-300">Detailed Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Write a comprehensive description about the college's history, facilities, and academic excellence..."
                className="w-full bg-slate-50 dark:bg-[#080d19]/ border border-slate-200 dark:border-white/ rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all resize-none"
              />
            </div>
          </div>

          <div className="pt-6 flex justify-end gap-4 border-t border-slate-200 dark:border-white/">
            <Link href="/dashboard" className="px-6 py-3 rounded-xl font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/ transition-all">
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </motion.div>
  );
}
