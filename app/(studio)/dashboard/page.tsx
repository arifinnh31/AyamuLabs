import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentCommissions from "@/components/dashboard/RecentCommissions";
import StudioUpdates from "@/components/dashboard/StudioUpdates";
import AIAssistantCard from "@/components/dashboard/AIAssistantCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="p-4 md:px-8 md:pb-8 md:pt-1">
      <WelcomeBanner />
      <StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecentCommissions />
        <div className="space-y-8">
          <StudioUpdates />
          <AIAssistantCard />
        </div>
      </div>
    </div>
  );
}
