import Image from "next/image";
import Link from "next/link";

export default function RecentCommissions() {
  return (
    <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-600 overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-600 flex items-center justify-between">
        <h3 className="font-bold text-lg text-gray-800 dark:text-white">
          Recent Commissions
        </h3>
        <Link
          className="text-sm font-medium text-primary hover:text-primary-hover"
          href="/orders"
        >
          View All
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
            <tr>
              <th className="px-6 py-4 font-semibold">Client</th>
              <th className="px-6 py-4 font-semibold">Type</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Deadline</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            <tr className="hover:bg-yellow-50/50 dark:hover:bg-gray-700/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-xs">
                    JD
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    John Doe
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                Character Art
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  In Progress
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                Oct 24, 2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <span className="material-icons-round">more_vert</span>
                </button>
              </td>
            </tr>
            <tr className="hover:bg-yellow-50/50 dark:hover:bg-gray-700/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Image
                    alt="Client"
                    className="h-8 w-8 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBDO5W2LrLxSBFjEPf0kxtdsU0zrdTgYH19EPs3UEjqSbeDArC6-QtEnEjh_EJhTy8ppwcsAjlnVvDBzmgNiwa1TFfQpVpqJnpI030liwA0JAP_StkMbde6gPZAbwYuRkD8VE3UMpA1gKpuGdx1DN2pScpLzlFYBuBthLOLGk1rWAId0gY-IzX83IVrBeH3nm8k6V39FfsIdxmwiuY4Q65L1DcRZLeCnDd30avlaaLVWAK4r28Qm6dOQQuTK-rUA6SraPmriZxQ"
                    width={32}
                    height={32}
                  />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Sarah Smith
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                VTuber Model
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                  Pending Review
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                Oct 26, 2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <span className="material-icons-round">more_vert</span>
                </button>
              </td>
            </tr>
            <tr className="hover:bg-yellow-50/50 dark:hover:bg-gray-700/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center text-pink-600 dark:text-pink-300 font-bold text-xs">
                    MK
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Mika Chan
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                Emote Set
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Done
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                Oct 20, 2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <span className="material-icons-round">more_vert</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
