import StudioSidebar from "@/components/dashboard/StudioSidebar";
import StudioHeader from "@/components/dashboard/StudioHeader";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
      <StudioSidebar />
      <div className="flex flex-1 flex-col h-full overflow-hidden relative">
        <StudioHeader />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
