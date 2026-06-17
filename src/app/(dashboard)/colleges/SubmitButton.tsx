"use client";

import { useFormStatus } from "react-dom";
import { Save } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn-primary flex items-center gap-2 px-6 py-3 ${pending ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {pending ? (
        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <Save className="h-4 w-4" />
      )}
      {pending ? "Saving College..." : "Save College Profile"}
    </button>
  );
}
