import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function OrderDetailHeader() {
  return (
    <header className="bg-background-light dark:bg-background-dark border-none sticky top-0 z-30 px-3 md:px-8 py-3 md:py-5 transition-all duration-300">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden min-w-0">
          <Link
            href="/orders"
            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors shrink-0"
            aria-label="Back to Board"
          >
            <span className="material-icons-round text-xl">arrow_back</span>
            <span className="font-medium hidden md:block">Kanban Board</span>
          </Link>
          <div className="h-5 md:h-6 w-px bg-border-light dark:bg-border-dark shrink-0"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-0.5 md:gap-2 overflow-hidden min-w-0">
            <span className="bg-primary/10 text-primary px-2 py-0.5 md:px-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide w-fit">
              Order #AYM-3492
            </span>
            <h1 className="text-sm md:text-xl font-bold font-display text-gray-900 dark:text-white truncate leading-tight">
              Custom Chibi Illustration
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
