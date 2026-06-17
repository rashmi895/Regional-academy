"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { deleteCourse } from "@/app/actions/course";

export function DeleteCourseButton({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteCourse(id);
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to delete course", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-400 transition-colors rounded-md hover:bg-red-400/10"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-xl max-w-sm w-full mx-4 border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Delete Course?</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
              Are you sure you want to delete this course? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                disabled={isDeleting}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-70 flex items-center gap-2"
              >
                {isDeleting ? (
                  <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : null}
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
