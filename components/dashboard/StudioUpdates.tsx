export default function StudioUpdates() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-600 p-6">
      <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-4">
        Studio Updates
      </h3>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex-shrink-0 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <span className="material-icons-round text-sm">smart_toy</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              AI Model v2.4 Ready
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              The new inking model has finished training.
            </p>
            <span className="text-xs text-gray-400 mt-1 block">
              2 hours ago
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex-shrink-0 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
            <span className="material-icons-round text-sm">star</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              New 5-Star Review
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              &quot;Loved the chicken onesie design!&quot;
            </p>
            <span className="text-xs text-gray-400 mt-1 block">
              5 hours ago
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex-shrink-0 flex items-center justify-center text-red-600 dark:text-red-400">
            <span className="material-icons-round text-sm">priority_high</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Deadline Approaching
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Order #442 is due tomorrow.
            </p>
            <span className="text-xs text-gray-400 mt-1 block">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
