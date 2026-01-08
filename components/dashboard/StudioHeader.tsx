"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StudioHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname.startsWith("/orders")) {
      return "Order Board";
    }
    if (pathname.startsWith("/aistudio")) {
      return "Variation Generator";
    }
    return "Studio Overview";
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide header on Order Details page
  if (pathname.startsWith("/orders/") && pathname !== "/orders") {
    return null;
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 md:hidden bg-surface-light dark:bg-surface-dark border-b dark:border-gray-700">
        <span className="text-lg font-bold">AyamuLabs</span>
        <button className="text-gray-600 dark:text-gray-300">
          <span className="material-icons-round">menu</span>
        </button>
      </header>
      <header className="hidden md:flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {getPageTitle()}
        </h1>
        <div className="flex items-center gap-4">
          {/* Search Bar */}


          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-300 shadow-sm hover:text-primary transition-colors relative cursor-pointer"
            aria-label="Toggle Theme"
          >
            <span className="material-icons-round">
              {mounted && theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Notification Icon */}
          <button className="p-2 rounded-full bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-300 shadow-sm hover:text-primary transition-colors relative cursor-pointer">
            <span className="material-icons-round">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-gray-700">
            <Image
              alt="User avatar"
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-primary cursor-pointer hover:ring-offset-2 transition-all duration-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8s-nLPIs_nn9hwIsHyagDk5Si8jfFeq2tU-3ADHZ6jPPzKB2ENVGcY0JXSWBlMhYuTu7fIU9cME6u4u_Bcj9NLjYDgd1jvpJ6w1Xd-CjBP2OO2FfQqf1d6b2nx7Ve5oXCAY_KfnOJNItTr6S3SMDhXrr0Q8sWNuyMB-veisGJSCNI-j-7C4jLTgM2xTHKvYZdNivPEFV8KExl6qd8V5tanzB-TrXvleaypRLE4NyEh0tdDEfTCJk7TrHxGNmVBo2lwK6gcwKw1Q"
              width={40}
              height={40}
            />
            <div className="text-left hidden lg:block">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-none">
                Artist-chan
              </p>
              <p className="text-xs text-muted-light dark:text-gray-400 leading-tight">
                Lead Illustrator
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
