"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { useSidebar } from "./SidebarContext";
import EditProfileModal from "./EditProfileModal";
import ConfirmationModal from "../ui/ConfirmationModal";
import NotificationDropdown from "./NotificationDropdown";

export default function StudioHeader() {

  const pathname = usePathname();
  const router = useRouter();
  const { toggleMobileMenu } = useSidebar();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setIsMobileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
    setIsLogoutConfirmOpen(false);
    router.push("/");
  };

  const getPageTitle = () => {
    if (pathname.startsWith("/orders")) {
      return "Order Board";
    }
    if (pathname.startsWith("/aistudio")) {
      return "Variation Generator";
    }
    if (pathname.startsWith("/team")) {
      return "Team Members";
    }

    if (pathname.startsWith("/content")) {
      return "Content Manager";
    }

    if (pathname.startsWith("/users")) {
      return "User Management";
    }
    return "Studio Overview";
  };



  // Hide header on Order Details page and Portfolio Manager
  if ((pathname.startsWith("/orders/") && pathname !== "/orders") || pathname === "/content/portfolio") {
    return null;
  }

  return (
    <>
      <header className="flex items-center justify-between p-3 md:hidden bg-surface-light dark:bg-surface-dark border-b dark:border-gray-700">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <span className="material-icons-round">menu</span>
          </Button>
          <span className="text-lg font-bold">{getPageTitle()}</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NotificationDropdown />
          <div className="relative" ref={mobileDropdownRef}>
            <Image
              alt="User avatar"
              className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-primary cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8s-nLPIs_nn9hwIsHyagDk5Si8jfFeq2tU-3ADHZ6jPPzKB2ENVGcY0JXSWBlMhYuTu7fIU9cME6u4u_Bcj9NLjYDgd1jvpJ6w1Xd-CjBP2OO2FfQqf1d6b2nx7Ve5oXCAY_KfnOJNItTr6S3SMDhXrr0Q8sWNuyMB-veisGJSCNI-j-7C4jLTgM2xTHKvYZdNivPEFV8KExl6qd8V5tanzB-TrXvleaypRLE4NyEh0tdDEfTCJk7TrHxGNmVBo2lwK6gcwKw1Q"
              width={32}
              height={32}
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            />
             {/* Mobile Dropdown Menu */}
             {isMobileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 overflow-hidden z-50">
                    <button 
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors"
                        onClick={() => {
                            setIsEditProfileOpen(true);
                            setIsMobileDropdownOpen(false);
                        }}
                    >
                        <span className="material-icons-round text-gray-400 text-lg">edit</span>
                        Edit Profile
                    </button>
                    <button 
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 transition-colors"
                        onClick={() => {
                            setIsLogoutConfirmOpen(true);
                            setIsMobileDropdownOpen(false);
                        }}
                    >
                         <span className="material-icons-round text-lg">logout</span>
                        Logout
                    </button>
                </div>
            )}
          </div>
        </div>
      </header>
      <header className="hidden md:flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {getPageTitle()}
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Notification Dropdown */}
          <NotificationDropdown />

          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div 
                className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <Image
                alt="User avatar"
                className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-primary hover:ring-offset-2 transition-all duration-200"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8s-nLPIs_nn9hwIsHyagDk5Si8jfFeq2tU-3ADHZ6jPPzKB2ENVGcY0JXSWBlMhYuTu7fIU9cME6u4u_Bcj9NLjYDgd1jvpJ6w1Xd-CjBP2OO2FfQqf1d6b2nx7Ve5oXCAY_KfnOJNItTr6S3SMDhXrr0Q8sWNuyMB-veisGJSCNI-j-7C4jLTgM2xTHKvYZdNivPEFV8KExl6qd8V5tanzB-TrXvleaypRLE4NyEh0tdDEfTCJk7TrHxGNmVBo2lwK6gcwKw1Q"
                width={40}
                height={40}
                />
                <div className="text-left hidden lg:block">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-none">
                    Ayamu
                </p>
                <p className="text-xs text-muted-light dark:text-gray-400 leading-tight">
                    Artist
                </p>
                </div>
                <span className="material-icons-round text-gray-400">expand_more</span>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 overflow-hidden z-50">
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
        </div>
      </header>

      {/* Modals */}
      <EditProfileModal 
        isOpen={isEditProfileOpen} 
        onClose={() => setIsEditProfileOpen(false)} 
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
