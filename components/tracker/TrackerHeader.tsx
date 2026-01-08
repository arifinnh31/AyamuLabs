export default function TrackerHeader() {
  return (
    <div className="mb-10 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Order Status Tracker
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Track the progress of your commissioned artwork.
        </p>
      </div>
      <div className="mt-4 sm:mt-0 bg-white dark:bg-surface-dark px-4 py-2 rounded-xl shadow-sm border border-yellow-100 dark:border-gray-700 flex items-center gap-3">
        <div>
          <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">
            Order ID
          </span>
          <span className="font-mono text-lg font-bold text-primary">
            #AYM-8821
          </span>
        </div>
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-600"></div>
        <div>
          <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">
            Service
          </span>
          <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
            Full Body Illustration
          </span>
        </div>
      </div>
    </div>
  );
}
