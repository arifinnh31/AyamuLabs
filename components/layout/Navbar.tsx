"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

import UserProfileMenu from "@/components/layout/UserProfileMenu";

export default function Navbar() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive =
      path === "/" ? pathname === "/" : pathname?.startsWith(path);
    return isActive
      ? "font-bold text-primary dark:text-primary transition-colors"
      : "font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors";
  };

  // Mock Logged In User
  const [currentUser, setCurrentUser] = useState({
    name: "Ayamu",
    role: "Artist",
    avatar: null as string | null
  });

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <span className="material-icons-round">egg</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                Ayamu<span className="text-primary">Labs</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/portfolio" className={getLinkClass("/portfolio")}>
              Portfolio
            </Link>
            <Link href="/commission" className={getLinkClass("/commission")}>
              Commission
            </Link>
            <Link href="/tracker" className={getLinkClass("/tracker")}>
              Tracker
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Login Button (Commented Out) */}
            {/* <Link href="/login">
              <Button>Login</Button>
            </Link> */}

            {/* Simulated Logged In User */}
            <UserProfileMenu 
                user={currentUser}
                onUpdateAvatar={(newUrl) => {
                    setCurrentUser(prev => ({...prev, avatar: newUrl}));
                }}
                variant="public"
            />
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            
             {/* Mobile User Avatar Trigger */}
             <UserProfileMenu 
                user={currentUser}
                onUpdateAvatar={(newUrl) => {
                    setCurrentUser(prev => ({...prev, avatar: newUrl}));
                }}
                isMobile={true}
             />
            
            {/* Login Button (Commented Out) */}
            {/* <Link href="/login">
              <Button size="sm">Login</Button>
            </Link> */}

            <Button
              variant="icon"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white ml-1"
            >
              <span className="material-icons-round text-3xl w-[1em] overflow-hidden whitespace-nowrap text-center block">
                {isMobileMenuOpen ? "close" : "menu_rounded"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-primary/20 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                pathname === "/"
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                pathname?.startsWith("/portfolio")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/commission"
              className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                pathname?.startsWith("/commission")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Commission
            </Link>
            <Link
              href="/tracker"
              className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                pathname?.startsWith("/tracker")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tracker
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                pathname?.startsWith("/about")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
             
             {/* Mobile Dashboard Link */}
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-bold transition-colors text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary mt-4 border-t border-gray-100 dark:border-gray-700 pt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
               <span className="flex items-center gap-2">
                    <span className="material-icons-round">dashboard</span>
                    Dashboard
               </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
