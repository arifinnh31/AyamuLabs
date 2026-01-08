"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive =
      path === "/" ? pathname === "/" : pathname?.startsWith(path);
    return isActive
      ? "font-bold text-primary dark:text-primary transition-colors"
      : "font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors";
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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
              <div className="bg-primary p-2 rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-300">
                <span className="material-icons-round text-white text-2xl">
                  egg_alt
                </span>
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
            <Link href="#" className={getLinkClass("/about")}>
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-zinc-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Theme"
            >
              <span className="material-icons-round text-2xl">
                {mounted && theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>

            {/* Login Button */}
            <Link
              href="/dashboard"
              className="bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all active:scale-95"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
            >
              <span className="material-icons-round text-3xl">
                {isMobileMenuOpen ? "close" : "menu_rounded"}
              </span>
            </button>
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
              href="#"
              className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                pathname?.startsWith("/about")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-bold text-secondary hover:bg-secondary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <div className="flex items-center px-3 py-2">
              <span className="text-gray-600 dark:text-gray-300 mr-2 font-bold">
                Theme:
              </span>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Theme"
              >
                <span className="material-icons-round text-2xl text-zinc-800 dark:text-zinc-200">
                  {mounted && theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
