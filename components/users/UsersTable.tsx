"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
  canEdit?: boolean;
}

export default function UsersTable({ 
  users, 
  currentPage, 
  totalPages, 
  totalUsers, 
  startIndex, 
  endIndex,
  onPageChange,
  onEdit,
  onDelete,
  canEdit = true
}: UsersTableProps) {
  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-gray-100 dark:border-gray-800">
              <th className="px-6 py-4 whitespace-nowrap">User</th>
              <th className="px-6 py-4 whitespace-nowrap">Role</th>
              <th className="px-6 py-4 whitespace-nowrap">Status</th>
              <th className="px-6 py-4 whitespace-nowrap">Joined</th>
              {canEdit && <th className="px-6 py-4 text-right whitespace-nowrap">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 shrink-0">
                         {user.avatar ? (
                            <Image 
                              src={user.avatar} 
                              alt={user.name} 
                              fill
                              className="rounded-full object-cover bg-gray-200"
                            />
                         ) : (
                            <div className="w-full h-full rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                                {user.name.charAt(0)}
                            </div>
                         )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 dark:text-white text-sm truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                        user.role === 'Admin' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                        user.role === 'Artist' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      user.status === "Active" 
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                        : user.status === "Banned"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {user.joinedDate}
                  </td>
                  {canEdit && (
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                            <button 
                                onClick={() => onEdit(user)}
                                className="text-gray-400 hover:text-primary transition-colors p-1"
                                title="Edit User"
                            >
                                <span className="material-icons-round text-lg">edit</span>
                            </button>
                            <button 
                                onClick={() => onDelete(user.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                title="Delete User"
                            >
                                <span className="material-icons-round text-lg">delete</span>
                            </button>
                        </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={canEdit ? 5 : 4} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                        No users found matching your criteria.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
        <span>Showing {totalUsers > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, totalUsers)} of {totalUsers} users</span>
        <div className="flex gap-2">
            <Button 
                variant="secondary" 
                size="sm" 
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </Button>
            <div className="flex items-center px-2 font-medium">
                Page {currentPage} of {Math.max(1, totalPages)}
            </div>
            <Button 
                variant="secondary" 
                size="sm" 
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </Button>
        </div>
      </div>
    </div>
  );
}
