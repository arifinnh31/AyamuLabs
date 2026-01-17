export default function CommissionDetails() {
  return (
    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-700">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
        Commission Details
      </h3>
      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Date Ordered</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">
            Oct 24, 2023
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Deadline</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">
            Nov 10, 2023
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Resolution</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">
            4k (3840x2160)
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Payment Option</span>
          <span className="font-medium text-gray-900 dark:text-gray-200">
            Full Payment
          </span>
        </li>
        <li className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Payment Method</span>
            <div className="flex items-center gap-1.5">
                <span className="material-icons-round text-blue-600 dark:text-blue-400 text-sm">payments</span>
                <span className="text-gray-900 dark:text-white font-medium">PayPal</span>
            </div>
        </li>
        <li className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-400">Total Price</span>
          <span className="font-bold text-lg text-primary">$120.00</span>
        </li>
      </ul>
    </div>
  );
}
