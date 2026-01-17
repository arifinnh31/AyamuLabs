"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DropdownMenu, { DropdownItem } from "../ui/DropdownMenu";

const RECENT_COMMISSIONS = [
  {
    id: "1",
    clientName: "John Doe",
    clientInitials: "JD",
    avatar: null,
    type: "Character Art",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    deadline: "Oct 24, 2023",
  },
  {
    id: "2",
    clientName: "Sarah Smith",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUBDO5W2LrLxSBFjEPf0kxtdsU0zrdTgYH19EPs3UEjqSbeDArC6-QtEnEjh_EJhTy8ppwcsAjlnVvDBzmgNiwa1TFfQpVpqJnpI030liwA0JAP_StkMbde6gPZAbwYuRkD8VE3UMpA1gKpuGdx1DN2pScpLzlFYBuBthLOLGk1rWAId0gY-IzX83IVrBeH3nm8k6V39FfsIdxmwiuY4Q65L1DcRZLeCnDd30avlaaLVWAK4r28Qm6dOQQuTK-rUA6SraPmriZxQ",
    type: "VTuber Model",
    status: "Pending Review",
    statusColor: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
    deadline: "Oct 26, 2023",
  },
  {
    id: "3",
    clientName: "Mika Chan",
    clientInitials: "MK",
    avatar: null, // "bg-pink-100..." handled in render
    avatarColor: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300",
    type: "Emote Set",
    status: "Done",
    statusColor: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    deadline: "Oct 20, 2023",
  },
];

export default function RecentCommissions() {
  const router = useRouter();

  const getActions = (id: string): DropdownItem[] => [
    {
      label: "View Details",
      icon: "visibility",
      onClick: () => router.push(`/orders/${id}`),
    },
  ];

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
            {RECENT_COMMISSIONS.map((commission) => (
              <tr 
                key={commission.id} 
                className="hover:bg-yellow-50/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    {commission.avatar ? (
                      <Image
                        alt={commission.clientName}
                        className="h-8 w-8 rounded-full"
                        src={commission.avatar}
                        width={32}
                        height={32}
                      />
                    ) : (
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs ${commission.avatarColor || 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'}`}>
                        {commission.clientInitials}
                      </div>
                    )}
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {commission.clientName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {commission.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${commission.statusColor}`}>
                    {commission.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {commission.deadline}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <DropdownMenu 
                    trigger={
                        <button className="text-gray-400 hover:text-primary transition-colors p-1">
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    }
                    items={getActions(commission.id)}
                    align="right"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
