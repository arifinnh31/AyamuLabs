"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
// import Button from "@/components/ui/Button"; // Unused

interface CommissionHeaderProps {
  onAddCategory: () => void;
}

export default function CommissionHeader({ onAddCategory }: CommissionHeaderProps) {
  return (
    <header className="bg-background-light dark:bg-background-dark border-none sticky top-0 z-30 px-3 md:px-8 py-3 md:py-5 transition-all duration-300">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/content"
            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors shrink-0"
            aria-label="Back to Content"
          >
            <span className="material-icons-round text-xl">arrow_back</span>
            <span className="font-medium hidden md:block">Content</span>
          </Link>
          <div className="h-5 md:h-6 w-px bg-border-light dark:bg-border-dark shrink-0"></div>
          <h1 className="text-sm md:text-xl font-bold font-display text-gray-900 dark:text-white truncate leading-tight">
            Commission Types
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <ThemeToggle />
          <button 
            onClick={onAddCategory}
            className="bg-primary hover:bg-primary-hover text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-sm font-bold shadow-sm shadow-primary/30 transition-all flex items-center gap-2 cursor-pointer"
          >
             <span className="material-icons-round text-lg md:text-sm">add</span>
             <span className="hidden md:inline">Add Category</span>
          </button>
        </div>
      </div>
    </header>
  );
}
