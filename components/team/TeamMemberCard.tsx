"use client";


import Link from "next/link";
import DropdownMenu from "../ui/DropdownMenu";

type TeamMember = {
  name: string;
  role: string;
  email: string;
  status: string;
  avatar: string;
};

export default function TeamMemberCard({ member, onEdit, onRemove }: { member: TeamMember; onEdit?: () => void; onRemove?: () => void }) {
  // Map internal status to display status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "online": return "bg-green-500";
      case "busy": return "bg-red-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center relative group shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Action Menu - Only visible on hover or if menu open (handled by dropdown) */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <DropdownMenu 
          trigger={
            <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              <span className="material-icons-round text-xl">more_vert</span>
            </button>
          }
          items={[
            { label: "Edit Role", onClick: () => onEdit && onEdit(), icon: "edit" },
            { label: "Remove", onClick: () => onRemove && onRemove(), variant: "danger", icon: "delete" }
          ]}
        />
      </div>

      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 ring-4 ring-white dark:ring-surface-dark shadow-sm">
          {member.avatar ? (
            <img 
              src={member.avatar} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
              {member.name.charAt(0)}
            </div>
          )}
        </div>
        <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white dark:border-surface-dark ${getStatusColor(member.status)}`} />
      </div>

      <h3 className="font-bold text-gray-800 dark:text-white mb-1 font-display">{member.name}</h3>
      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
      
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 truncate max-w-full px-2">
        {member.email}
      </div>

      <Link 
        href={`/users/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-auto w-full py-2 px-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary rounded-xl text-sm font-semibold transition-colors duration-200"
      >
        View Profile
      </Link>
    </div>
  );
}
