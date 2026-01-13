"use client";

import StudioSidebar from "@/components/dashboard/StudioSidebar";
import StudioHeader from "@/components/dashboard/StudioHeader";
import { SidebarProvider } from "@/components/dashboard/SidebarContext";
import { usePathname } from "next/navigation";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Hide main StudioHeader for pages that have their own custom headers
  const shouldHideHeader = pathname.startsWith("/content/portfolio") || pathname.startsWith("/content/commissions");

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
        <StudioSidebar />
        <div className="flex flex-1 flex-col h-full overflow-hidden relative">
          {!shouldHideHeader && <StudioHeader />}
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
