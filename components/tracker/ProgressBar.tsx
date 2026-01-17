export default function ProgressBar() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border border-yellow-100 dark:border-gray-700 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="material-icons-round text-primary">timeline</span>
        Current Stage: In Progress
      </h2>
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-100 dark:bg-gray-700">
          <div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
            style={{ width: "65%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mb-2 shadow-md">
              <span className="material-icons-round text-sm">check</span>
            </div>
            <span className="text-primary font-bold">Order Accepted</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mb-2 shadow-md">
              <span className="material-icons-round text-sm">check</span>
            </div>
            <span className="text-primary font-bold">Paid</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary ring-4 ring-yellow-100 dark:ring-gray-600 text-white flex items-center justify-center mb-2 shadow-md animate-pulse">
              <span className="material-icons-round text-sm">brush</span>
            </div>
            <span className="text-primary font-bold">In Progress</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 flex items-center justify-center mb-2">
              <span className="material-icons-round text-sm">check_circle</span>
            </div>
            <span>Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
