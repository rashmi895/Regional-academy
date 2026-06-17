import { updateCollege } from "@/app/actions/college";
import { Building, MapPin, Globe, Mail, Phone, Hash, Link as LinkIcon, Save, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { SubmitButton } from "../../SubmitButton";

export const dynamic = "force-dynamic";

export default async function EditCollegePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const college = await prisma.college.findUnique({
    where: { id }
  });

  if (!college) {
    notFound();
  }

  // Pre-bind the college ID to the update action
  const updateCollegeWithId = updateCollege.bind(null, college.id);

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Edit College</h1>
          <p className="text-sm text-slate-400 mt-1">Update the details for {college.name}</p>
        </div>
        <Link href="/colleges" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
          ← Back to Colleges
        </Link>
      </div>

      <div className="glass-card p-8">
        <form action={updateCollegeWithId} className="space-y-8">
          
          {/* Basic Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="category" className="text-sm font-medium text-slate-300">College Category *</label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue={college.category || "PAN_INDIA"}
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="PAN_INDIA">Pan India</option>
                  <option value="ODISHA">Odisha</option>
                  <option value="INTERNATIONAL">International</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Building className="h-4 w-4 text-[#5c6eea]" />
                  College Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={college.name}
                  placeholder="e.g. Kalinga Institute of Industrial Technology"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-slate-300">Institution Type *</label>
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue={college.type}
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="PRIVATE">Private</option>
                  <option value="GOVERNMENT">Government</option>
                  <option value="DEEMED">Deemed University</option>
                  <option value="AUTONOMOUS">Autonomous</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="logo" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-[#10b981]" />
                  Logo Image (Upload new to replace)
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#10b981]/20 file:text-[#10b981] hover:file:bg-[#10b981]/30 cursor-pointer"
                />
                {college.logo && (
                  <p className="text-xs text-slate-400 mt-2">Current logo: <img src={college.logo} alt="Logo" className="inline-block h-6 w-6 ml-2 rounded" /></p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="ranking" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Hash className="h-4 w-4 text-[#f59e0b]" />
                  NIRF Ranking (Optional)
                </label>
                <input
                  type="number"
                  id="ranking"
                  name="ranking"
                  defaultValue={college.ranking || ""}
                  placeholder="e.g. 42"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Location Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="location" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ef4444]" />
                  Full Address *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  defaultValue={college.location}
                  placeholder="e.g. Patia, Bhubaneswar, Odisha 751024"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-slate-300">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  defaultValue={college.city}
                  placeholder="e.g. Bhubaneswar"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="state" className="text-sm font-medium text-slate-300">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  defaultValue={college.state}
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Contact & Web</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#3b82f6]" />
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  defaultValue={college.website || ""}
                  placeholder="https://kiit.ac.in"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#3b82f6]" />
                  Official Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={college.email || ""}
                  placeholder="admission@college.edu.in"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#3b82f6]" />
                  Contact Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={college.phone || ""}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Status & Description</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="isActive" className="text-sm font-medium text-slate-300">Status *</label>
                <select
                  id="isActive"
                  name="isActive"
                  required
                  defaultValue={college.isActive ? "true" : "false"}
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all appearance-none"
                >
                  <option value="true">Active (Visible)</option>
                  <option value="false">Inactive (Hidden)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-300">Detailed Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  defaultValue={college.description || ""}
                  placeholder="Write a comprehensive description about the college's history, facilities, and academic excellence..."
                  className="w-full bg-[#080d19]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all resize-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-end gap-4 border-t border-white/10">
            <Link href="/colleges" className="px-6 py-3 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
