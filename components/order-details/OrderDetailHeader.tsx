import Link from "next/link";

export default function OrderDetailHeader() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-30 px-4 md:px-8 py-4 md:py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/orders"
            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <span className="material-icons-round text-xl">arrow_back</span>
            <span className="font-medium">Kanban Board</span>
          </Link>
          <div className="h-6 w-px bg-border-light dark:bg-border-dark"></div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">
              Order #3492
            </span>
            <h1 className="text-xl font-bold font-display text-gray-900 dark:text-white">
              Custom Chibi Illustration
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium cursor-pointer">
              <span className="material-icons-round text-gray-400">bolt</span>
              Actions
              <span className="material-icons-round text-gray-400">
                expand_more
              </span>
            </button>
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm shadow-primary/30 transition-all flex items-center gap-2 cursor-pointer">
            <span className="material-icons-round text-sm">save</span>
            Save Changes
          </button>
        </div>
      </div>
    </header>
  );
}
