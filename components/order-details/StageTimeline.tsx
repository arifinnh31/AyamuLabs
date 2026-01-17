export default function StageTimeline() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
        Current Stage
      </h3>
      <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-6">
        <div className="relative">
          <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-surface-dark"></div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">
            Incoming
          </h4>
          <p className="text-xs text-gray-500">Accepted - Oct 24, 10:00 AM</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-surface-dark"></div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">
            Paid
          </h4>
          <p className="text-xs text-gray-500">Verified - Oct 25, 2:30 PM</p>
        </div>
        <div className="relative">
          <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-surface-dark animate-pulse"></div>
          <h4 className="text-sm font-bold text-primary">In Progress</h4>
          <div className="mt-3 flex gap-2">
            <button className="text-xs bg-primary text-white px-2 py-1 rounded shadow-sm hover:bg-primary-hover cursor-pointer">
              Mark as Done
            </button>
          </div>
        </div>
        <div className="relative opacity-50">
          <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-surface-dark"></div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">
            Done
          </h4>
        </div>
      </div>
    </div>
  );
}
