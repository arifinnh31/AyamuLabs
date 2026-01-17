"use client";


import { useState } from "react";
import Image from "next/image";
import Modal from "../ui/Modal";
import { User } from "@/types/user";
import { MOCK_USERS } from "@/data/users";

interface ManageCreativesModalProps {
  isOpen: boolean;
  onClose: () => void;
  assignedCreatives: User[];
  onUpdate: (updatedList: User[]) => void;
}

export default function ManageCreativesModal({ isOpen, onClose, assignedCreatives, onUpdate }: ManageCreativesModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"assigned" | "add">("assigned");

  // Filter available creatives: Must be Artist or Admin
  const allCreatives = MOCK_USERS.filter(u => u.role === "Artist" || u.role === "Admin");

  const handleRemove = (id: string) => {
    onUpdate(assignedCreatives.filter(c => c.id !== id));
  };
   
  const handleAdd = (member: User) => {
      if(!assignedCreatives.find(c => c.id === member.id)){
        onUpdate([...assignedCreatives, member]);
        setSearchQuery("");
      }
      setActiveTab("assigned");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Manage Assigned Creatives">
      <div className="w-full max-w-lg min-h-[400px]">
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
            <button 
                onClick={() => setActiveTab("assigned")}
                className={`py-2 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === "assigned" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}
            >
                Assigned ({assignedCreatives.length})
            </button>
            <button 
                onClick={() => setActiveTab("add")}
                className={`py-2 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === "add" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}
            >
                Add Member
            </button>
        </div>

        {activeTab === "assigned" ? (
             <div className="space-y-3">
             {assignedCreatives.map((member) => (
               <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                      {member.avatar ? (
                          <Image src={member.avatar} alt={member.name} fill className="object-cover" />
                      ) : (
                          <div className="flex items-center justify-center w-full h-full text-gray-500 font-bold">{member.name.charAt(0)}</div>
                      )}
                   </div>
                   <div>
                     <p className="font-bold text-gray-900 dark:text-white">{member.name}</p>
                     <p className="text-xs text-gray-500">{member.role}</p>
                   </div>
                 </div>
                 <button 
                    onClick={() => handleRemove(member.id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                 >
                   <span className="material-icons-round">remove_circle_outline</span>
                 </button>
               </div>
             ))}
             {assignedCreatives.length === 0 && (
                <p className="text-center text-gray-500 py-8">No creatives assigned yet.</p>
             )}
           </div>
        ) : (
            <div className="space-y-4">
                 <input 
                    type="text" 
                    placeholder="Search creatives..." 
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <div className="space-y-2">
                    {allCreatives
                        .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) && !assignedCreatives.find(existing => existing.id === c.id))
                        .map(member => (
                        <div key={member.id} className="flex items-center justify-between p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer" onClick={() => handleAdd(member)}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                    {member.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white text-sm">{member.name}</p>
                                    <p className="text-xs text-gray-500">{member.role}</p>
                                </div>
                            </div>
                            <span className="material-icons-round text-gray-400">add_circle</span>
                        </div>
                    ))}
                    {allCreatives.filter(c => !assignedCreatives.find(existing => existing.id === c.id)).length === 0 && (
                        <p className="text-center text-sm text-gray-500">No more creatives available to add.</p>
                    )}
                 </div>
            </div>
        )}
      </div>
    </Modal>
  );
}
