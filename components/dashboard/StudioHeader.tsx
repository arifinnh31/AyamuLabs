"use client";

import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { useSidebar } from "./SidebarContext";
import UserProfileMenu from "@/components/layout/UserProfileMenu";
import NotificationDropdown from "./NotificationDropdown";

export default function StudioHeader() {

  const pathname = usePathname();
  // const router = useRouter(); // Handled in component
  const { toggleMobileMenu, profileImage, setProfileImage } = useSidebar();
  
  // State moved to UserProfileMenu
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  // const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  // const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  // const mobileDropdownRef = useRef<HTMLDivElement>(null);

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
          <div className="relative">
            <UserProfileMenu 
                 isMobile
                 user={{
                     name: "Ayamu", // Hardcoded for now as Studio Header only has Context Image
                     role: "Artist",
                     avatar: profileImage
                 }}
                 onUpdateAvatar={setProfileImage}
            />
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
          <UserProfileMenu 
                 user={{
                     name: "Ayamu",
                     role: "Artist",
                     avatar: profileImage
                 }}
                 onUpdateAvatar={setProfileImage}
            />
        </div>
      </header>
    </>
  );
}
