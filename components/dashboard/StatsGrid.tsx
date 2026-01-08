export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-600 flex items-center justify-between group hover:border-primary transition-colors">
        <div>
          <p className="text-sm font-medium text-muted-light dark:text-gray-400 mb-1">
            Pending Orders
          </p>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">12</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 dark:text-orange-400 group-hover:bg-primary group-hover:text-white transition-all">
          <span className="material-icons-round">hourglass_empty</span>
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-600 flex items-center justify-between group hover:border-blue-400 transition-colors">
        <div>
          <p className="text-sm font-medium text-muted-light dark:text-gray-400 mb-1">
            In Progress
          </p>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">8</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
          <span className="material-icons-round">brush</span>
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-600 flex items-center justify-between group hover:border-green-400 transition-colors">
        <div>
          <p className="text-sm font-medium text-muted-light dark:text-gray-400 mb-1">
            Completed (This Month)
          </p>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">45</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
          <span className="material-icons-round">check_circle</span>
        </div>
      </div>
    </div>
  );
}
