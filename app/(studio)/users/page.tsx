"use client";

import { useState, useMemo } from "react";
import Button from "@/components/ui/Button";
import UsersTable from "@/components/users/UsersTable";
import UserModal from "@/components/users/UserModal";
import ConfirmationModal from "@/components/ui/ConfirmationModal";
import { MOCK_USERS } from "@/data/users";
import { User, UserRole } from "@/types/user";

export default function UsersPage() {
  // Data State
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  
  // UI State
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<UserRole | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Role Simulation State
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>("Admin");
  const canEdit = currentUserRole === "Admin";

  // Modal State
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  // Filtering Logic
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === "All" || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, searchQuery, roleFilter]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleRoleFilter = () => {
    const roles: (UserRole | "All")[] = ["All", "Client", "Artist", "Admin"];
    const nextIndex = (roles.indexOf(roleFilter) + 1) % roles.length;
    setRoleFilter(roles[nextIndex]);
    setCurrentPage(1);
  };

  const handleExport = () => {
    const csvContent = [
      ["ID", "Name", "Email", "Role", "Status", "Joined"],
      ...filteredUsers.map(u => [u.id, u.name, u.email, u.role, u.status, u.joinedDate])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "users_export.csv";
    link.click();
  };

  // CRUD Handlers
  const handleAddUser = () => {
    setEditingUser(null);
    setIsUserModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsUserModalOpen(true);
  };

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleSaveUser = (userData: Omit<User, "id" | "joinedDate">) => {
    if (editingUser) {
      // Update existing user
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...userData } : u));
    } else {
      // Create new user
      const newUser: User = {
        ...userData,
        id: (Math.max(...users.map(u => parseInt(u.id) || 0)) + 1).toString(), // Simple ID generation
        joinedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      };
      setUsers([newUser, ...users]); // Add to top
    }
    setIsUserModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id));
      setUserToDelete(null);
      // Adjust pagination if needed
      if (currentUsers.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="space-y-6 p-4 md:px-8 md:pb-8 md:pt-1 h-[calc(100vh-theme(spacing.20))] flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
        <div className="relative w-full md:w-96">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
                type="text" 
                placeholder="Search users..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
        </div>
        <div className="flex gap-2 flex-wrap items-center">
            {/* Simulation Toggle */}
            <div className="flex items-center gap-2 mr-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <span className="text-xs px-2 font-medium">Viewing as:</span>
                <button 
                    onClick={() => setCurrentUserRole("Admin")}
                    className={`px-2 py-1 text-xs rounded-md transition-colors ${currentUserRole === "Admin" ? "bg-white dark:bg-gray-700 shadow-sm font-bold" : "text-gray-500"}`}
                >Admin</button>
                <button 
                    onClick={() => setCurrentUserRole("Artist")}
                    className={`px-2 py-1 text-xs rounded-md transition-colors ${currentUserRole === "Artist" ? "bg-white dark:bg-gray-700 shadow-sm font-bold" : "text-gray-500"}`}
                >Artist</button>
            </div>

            <Button variant="secondary" className="gap-2" onClick={handleRoleFilter}>
                <span className="material-icons-round text-sm">filter_list</span>
                Filter: {roleFilter}
            </Button>
            <Button variant="secondary" className="gap-2" onClick={handleExport}>
                <span className="material-icons-round text-sm">download</span>
                Export
            </Button>
            
            {canEdit && (
                <Button className="gap-2" onClick={handleAddUser}>
                    <span className="material-icons-round text-sm">add</span>
                    Add User
                </Button>
            )}
        </div>
      </div>

      <div className="flex-1 min-h-0">
          <UsersTable 
            users={currentUsers}
            currentPage={currentPage}
            totalPages={totalPages}
            totalUsers={filteredUsers.length}
            startIndex={startIndex}
            endIndex={endIndex}
            onPageChange={setCurrentPage}
            onEdit={handleEditUser}
            onDelete={(userId) => {
                const user = users.find(u => u.id === userId);
                if (user) handleDeleteClick(user);
            }}
            canEdit={canEdit}
          />
      </div>

      {/* Modals */}
      <UserModal 
        key={isUserModalOpen ? "open" : "closed"} 
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onSave={handleSaveUser}
        initialData={editingUser}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete User"
        description={`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`}
        confirmLabel="Delete"
        isDanger
      />
    </div>
  );
}
