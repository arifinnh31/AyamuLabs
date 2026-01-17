"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ConfirmationModal from "../ui/ConfirmationModal";
import EditProfileModal from "../dashboard/EditProfileModal";

interface UserProfileMenuProps {
  user: {
    name: string;
    role: string;
    avatar: string | null;
  };
  onUpdateAvatar: (newUrl: string) => void;
  isMobile?: boolean;
  variant?: "public" | "studio";
}

export default function UserProfileMenu({ user, onUpdateAvatar, isMobile = false, variant = "studio" }: UserProfileMenuProps) {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLogoutConfirmOpen(false);
    router.push("/");
  };

  /* Inlined Triggers to avoid re-creation on render */
  const mobileTriggerInstance = (
    <div className="relative">
      {user.avatar ? (
          <Image
          alt="User avatar"
          className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-primary cursor-pointer"
          src={user.avatar}
          width={32}
          height={32}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
      ) : (
          <div 
              className="h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm ring-2 ring-primary cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
              {user.name.charAt(0)}
          </div>
      )}
    </div>
  );

  const desktopTriggerInstance = (
    <div className="relative">
        <div 
            className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-gray-700 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            {user.avatar ? (
                <Image
                alt="User avatar"
                className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-primary hover:ring-offset-2 transition-all duration-200"
                src={user.avatar}
                width={40}
                height={40}
                />
            ) : (
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg ring-2 ring-primary hover:ring-offset-2 transition-all duration-200">
                    {user.name.charAt(0)}
                </div>
            )}
            <div className="text-left hidden lg:block">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-none">
                {user.name}
            </p>
            <p className="text-xs text-muted-light dark:text-gray-400 leading-tight">
                {user.role}
            </p>
            </div>
            <span className="material-icons-round text-gray-400">expand_more</span>
        </div>
    </div>
  );

  return (
    <>
      <div className="relative" ref={dropdownRef}>
          {isMobile ? mobileTriggerInstance : desktopTriggerInstance}

          {/* Dropdown Menu */}
          {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 overflow-hidden z-50">
                    {variant === "public" ? (
                        <button 
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors"
                            onClick={() => {
                                router.push("/dashboard");
                                setIsDropdownOpen(false);
                            }}
                        >
                            <span className="material-icons-round text-gray-400 text-lg">dashboard</span>
                            Go to Dashboard
                        </button>
                    ) : (
                        <button 
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors"
                            onClick={() => {
                                router.push("/");
                                setIsDropdownOpen(false);
                            }}
                        >
                            <span className="material-icons-round text-gray-400 text-lg">home</span>
                            Go to Home
                        </button>
                    )}

                    <button 
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors"
                        onClick={() => {
                            setIsEditProfileOpen(true);
                            setIsDropdownOpen(false);
                        }}
                    >
                        <span className="material-icons-round text-gray-400 text-lg">edit</span>
                        Edit Profile
                    </button>

                    <button 
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 transition-colors"
                        onClick={() => {
                            setIsLogoutConfirmOpen(true);
                            setIsDropdownOpen(false);
                        }}
                    >
                        <span className="material-icons-round text-lg">logout</span>
                        Logout
                    </button>
                </div>
            )}
      </div>

      {/* Modals */}
      <EditProfileModal 
        isOpen={isEditProfileOpen} 
        onClose={() => setIsEditProfileOpen(false)} 
        currentImage={user.avatar}
        onSaveImage={onUpdateAvatar}
      />

      <ConfirmationModal
        isOpen={isLogoutConfirmOpen}
        onClose={() => setIsLogoutConfirmOpen(false)}
        onConfirm={handleLogout}
        title="Log Out"
        description="Are you sure you want to log out? You will need to sign in again to access the studio."
        confirmLabel="Log Out"
        isDanger={true}
      />
    </>
  );
}
