import { createBlog } from "@/app/actions/blog";
import { PenTool, Image as ImageIcon, Type, Tag, Globe, Search, AlignLeft } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "./SubmitButton";

export default function AddBlogPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Add New Blog</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Publish a new article or update</p>
        </div>
        <Link href="/blogs" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors">
          ← Back to Blogs
        </Link>
      </div>

      <div className="glass-card p-8">
        <form action={createBlog} className="space-y-8">
          
          {/* Main Content Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Article Content</h3>
            <div className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Type className="h-4 w-4 text-[#5c6eea]" />
                  Blog Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  placeholder="e.g. Top 10 Engineering Colleges in 2026"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#5c6eea] focus:ring-1 focus:ring-[#5c6eea] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="excerpt" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <AlignLeft className="h-4 w-4 text-[#f59e0b]" />
                  Excerpt (Short Summary)
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  rows={2}
                  placeholder="A brief summary of the article..."
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <PenTool className="h-4 w-4 text-[#10b981]" />
                  Main Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={10}
                  placeholder="Write your full blog post here..."
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all resize-y"
                />
              </div>
            </div>
          </div>

          {/* Media & Tags Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">Media & Taxonomy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label htmlFor="coverImage" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-[#ef4444]" />
                  Cover Image URL
                </label>
                <input
                  type="url"
                  id="coverImage"
                  name="coverImage"
                  placeholder="https://example.com/image.jpg"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#ef4444] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-[#3b82f6]" />
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="e.g. Exams, Updates, Admissions"
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3b82f6] transition-all"
                />
              </div>

            </div>
          </div>

          {/* SEO & Publishing */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-white/5 pb-2">SEO & Publishing</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="metaTitle" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <Search className="h-4 w-4 text-[#8b5cf6]" />
                    SEO Meta Title
                  </label>
                  <input
                    type="text"
                    id="metaTitle"
                    name="metaTitle"
                    placeholder="Meta title for search engines"
                    className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#8b5cf6] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="metaDesc" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <Search className="h-4 w-4 text-[#8b5cf6]" />
                    SEO Meta Description
                  </label>
                  <input
                    type="text"
                    id="metaDesc"
                    name="metaDesc"
                    placeholder="Short description for search results"
                    className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-600 focus:outline-none focus:border-[#8b5cf6] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="published" className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#14b8a6]" />
                  Status *
                </label>
                <select
                  id="published"
                  name="published"
                  required
                  className="w-full bg-slate-50 dark:bg-[#080d19]/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6] transition-all appearance-none"
                >
                  <option value="true">Published (Live)</option>
                  <option value="false">Draft (Hidden)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-end gap-4 border-t border-slate-200 dark:border-white/10">
            <Link href="/blogs" className="px-6 py-3 rounded-xl font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
