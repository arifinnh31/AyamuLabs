"use client";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function StudioSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`hidden flex-col bg-surface-light dark:bg-surface-dark border-r border-yellow-100 dark:border-gray-700 md:flex shadow-sm z-50 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="relative flex items-center justify-between h-20 border-b border-yellow-50 dark:border-gray-600 px-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white dark:bg-surface-dark border border-yellow-100 dark:border-gray-600 rounded-full p-1 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-30"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <span className="material-icons-round text-sm text-gray-500">
            {isCollapsed ? "chevron_right" : "chevron_left"}
          </span>
        </button>
        <div className={`flex items-center gap-3 ${isCollapsed ? "justify-center w-full" : ""}`}>
          <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
            <span className="material-icons-round">egg</span>
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-white truncate">
              Ayamu<span className="text-primary">Labs</span>
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {!isCollapsed && (
          <p className="px-2 text-xs font-semibold text-muted-light dark:text-gray-400 uppercase tracking-wider mb-2">
            Main
          </p>
        )}
        <NavItem
          href="/dashboard"
          icon="dashboard"
          label="Dashboard"
          isCollapsed={isCollapsed}
          isActive={pathname === "/dashboard"}
        />
        <NavItem
          href="/orders"
          icon="shopping_bag"
          label="Orders"
          isCollapsed={isCollapsed}
          isActive={pathname.startsWith("/orders")}
        />
        <NavItem
          href="/aistudio"
          icon="auto_awesome"
          label="AI Lab"
          isCollapsed={isCollapsed}
          isActive={pathname.startsWith("/aistudio")}
        />

        {!isCollapsed && (
          <p className="px-2 text-xs font-semibold text-muted-light dark:text-gray-400 uppercase tracking-wider mt-6 mb-2">
            Studio
          </p>
        )}
        <NavItem
          href="#"
          icon="group"
          label="Team"
          isCollapsed={isCollapsed}
          isActive={false}
        />
        <NavItem
          href="#"
          icon="settings"
          label="Settings"
          isCollapsed={isCollapsed}
          isActive={false}
        />

        {!isCollapsed && (
          <p className="px-2 text-xs font-semibold text-muted-light dark:text-gray-400 uppercase tracking-wider mt-6 mb-2">
            Admin
          </p>
        )}
        <NavItem
          href="#"
          icon="admin_panel_settings"
          label="Users"
          isCollapsed={isCollapsed}
          isActive={false}
        />
      </div>


    </aside>
  );
}

function NavItem({
  href,
  icon,
  label,
  isCollapsed,
  isActive,
}: {
  href: string;
  icon: string;
  label: string;
  isCollapsed: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
        isActive
          ? "bg-primary/20 text-yellow-800 dark:text-yellow-200"
          : "text-gray-600 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-600"
      } ${isCollapsed ? "justify-center" : ""}`}
      href={href}
      title={isCollapsed ? label : ""}
    >
      <span className={`material-icons-round text-2xl ${isActive ? "" : "group-hover:text-primary transition-colors"}`}>
        {icon}
      </span>
      {!isCollapsed && <span className="font-medium truncate">{label}</span>}
      
      {/* Tooltip for collapsed state */}
      {isCollapsed && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
          {label}
        </div>
      )}
    </Link>
  );
}
