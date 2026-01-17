"use client";

import Image from "next/image";
import { useState } from "react";
import ManageCreativesModal from "./ManageCreativesModal";
import { MOCK_USERS } from "@/data/users";
import { User } from "@/types/user";

export default function AssignedCreativesCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Initialize with "Ayam Hamil" (id 2) and "Kentung" (id 4) as requested
  const [creatives, setCreatives] = useState<User[]>(
    MOCK_USERS.filter(u => u.id === "2" || u.id === "4")
  );

  return (
    <>
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
        <h2 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
          <span className="material-icons-round text-primary">group</span>
          Assigned Creatives
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex -space-x-2">
            {creatives.map((member) => (
                <div key={member.id} className="relative w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark ring-2 ring-primary/20 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {member.avatar ? (
                        <Image
                            alt={member.name}
                            className="object-cover"
                            src={member.avatar}
                            fill
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-xs font-bold text-gray-500">
                            {member.name.charAt(0)}
                        </div>
                    )}
                </div>
            ))}
            {creatives.length === 0 && (
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <span className="text-xs text-gray-400">0</span>
                </div>
            )}
          </div>
          <div className="flex gap-3">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-primary font-medium hover:underline cursor-pointer"
            >
              Manage
            </button>
          </div>
        </div>
      </div>
      <ManageCreativesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        assignedCreatives={creatives}
        onUpdate={setCreatives}
      />
    </>
  );
}
